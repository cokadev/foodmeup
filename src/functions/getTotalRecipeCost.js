import getIngredientCostOfRecipe from "./getIngredientCostOfRecipe";
import { isObject } from "util";

const getTotalRecipeCost = recipe => {
  const totalCost = recipe.fields.ingredients.reduce((val, ingredient) => {
    let memo = val;

    if (isObject(val))
      memo = getIngredientCostOfRecipe(
        val.fields.ingredient.fields.cost,
        val.fields.ingredient.fields.unitCost,
        val.fields.unit
      );

    return (
      memo +
      getIngredientCostOfRecipe(
        ingredient.fields.ingredient.fields.cost,
        ingredient.fields.ingredient.fields.unitCost,
        ingredient.fields.unit
      )
    );
  });

  return totalCost;
};

export default getTotalRecipeCost;
