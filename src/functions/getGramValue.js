/**
 * On utilise la récursivité pour multiplier toutes les quantités des unités & sous-unités
 * afin d'obtenir une valeur de référence de conversion: ici c'est le gramme
 * exemple avec le lot de 3 pce:
 * 3 (pce) * 3 (kg) * (1000) g = 9000g
 *
 * @param {Unit} unit
 * @param {float} quantity
 * @return {float}
 */
const getGramValue = (unit, quantity = 1) => {
  if (!unit.fields.referenceUnit) return quantity;

  const newQuantity = unit.fields.quantity * quantity;
  return getGramValue(unit.fields.referenceUnit, newQuantity);
};

export default getGramValue;
