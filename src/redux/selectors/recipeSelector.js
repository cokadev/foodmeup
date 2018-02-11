import { createSelector } from "reselect";
import getTotalRecipeCost from "../../functions/getTotalRecipeCost";

const getRecipeList = (state, props) => state.recipe.recipeList;
const getRecipeId = (state, props) => props.match.params.id;

const recipeSelector = createSelector(
  [getRecipeList, getRecipeId],
  (recipeList, recipeId) => {
    let recipe = recipeList.find(item => item.sys.id === recipeId);

    if (recipe) {
      recipe = {
        ...recipe,
        totalCost: getTotalRecipeCost(recipe) //total cost of recipe
      };
    }

    return recipe;
  }
);

export default recipeSelector;
