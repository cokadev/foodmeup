import { createSelector } from "reselect";

const getRecipeList = (state, props) => state.recipe.recipeList;
const getRecipeId = (state, props) => props.match.params.id;

const recipeSelector = createSelector(
  [getRecipeList, getRecipeId],
  (recipeList, recipeId) => {
    let recipe = recipeList.find(item => item.sys.id === recipeId);
    return recipe;
  },
);

export default recipeSelector;
