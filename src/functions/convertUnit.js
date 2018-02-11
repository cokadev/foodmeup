import getGramValue from "./getGramValue"

/**
 * Permet de récuper le facteur de conversion de l'unité <unit> vers l'unité <to>
 * On va utiliser leur équivalents en gramme afin de pouvoir trouver le facteur de conversion
 * 
 * @param {Unit} unit 
 * @param {Unit} to
 * @return {float}
 */
const convertUnit = (unit, to) => {
  const unitGramvalue = getGramValue(unit);
  const toGramValue = getGramValue(to);

  return unitGramvalue / toGramValue;
}

export default convertUnit;