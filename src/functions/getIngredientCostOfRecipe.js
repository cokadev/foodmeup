import convertUnit from "./convertUnit";

/**
 * Calcul le prix d'un ingrédient dans une recette par rapport à son prix de référence et de sa quantité dans la recette
 *
 * @param {float} cost Prix de référence de l'ingrédient (ex: 1€)
 * @param {*} unit Unité du prix de référence (ex: Kg)
 * @param {*} ingredientUnitInRecipe  Unité liée à la quantité de l'ingrédient dans une recette (ex: 2 cs)
 * @return {float}
 */
const getIngredientCostOfRecipe = (cost, unit, ingredientUnitInRecipe) => {
  const factor = convertUnit(ingredientUnitInRecipe, unit);

  return parseFloat((cost * factor).toFixed(2));
};

export default getIngredientCostOfRecipe;
