const pce3 = {
  name: "LOT DE 3 PCE",
  quantity: 3,
  referenceUnit: {
    name: "PCE",
    quantity: 3,
    referenceUnit: {
      name: "Kg",
      quantity: 1000,
      referenceUnit: {
        name: "g",
        quantity: null,
        referenceUnit: null,
      }
    }
  }
}

const pce6 = {
  name: "LOT DE 6 PCE",
  quantity: 6,
  referenceUnit: {
    name: "PCE",
    quantity: 3,
    referenceUnit: {
      name: "Kg",
      quantity: 1000,
      referenceUnit: {
        name: "g",
        quantity: null,
        referenceUnit: null,
      }
    }
  }
}

const cs = {
  name: "cs",
  quantity: 20,
  referenceUnit: {
    name: "g",
    quantity: null,
    referenceUnit: null,
  }
}

const cs120 = {
  name: "120 cs",
  quantity: 120,
  referenceUnit: {
    name: "cs",
    quantity: 20,
    referenceUnit: {
      name: "g",
      quantity: null,
      referenceUnit: null,
    }
  }
}

const pce = {
  name: "pce",
  quantity: 3,
  referenceUnit: {
    name: "kg",
    quantity: 1000,
    referenceUnit: {
      name: "g",
      quantity: null,
      referenceUnit: null,
    }
  }
}

/**
 * Permet de récuper le facteur de conversion de l'unité <unit> vers l'unité <to>
 * On va utiliser leur équivalents en gramme afin de pouvoir trouver le facteur de conversion
 * 
 * @param {Unit} unit 
 * @param {Unit} to
 * @return {float}
 */
function convertUnit(unit, to) {
  const unitGramvalue = getGramValue(unit);
  const toGramValue = getGramValue(to);

  return unitGramvalue / toGramValue;
}


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
function getGramValue(unit, quantity = 1) {
  if(unit.referenceUnit === null) return quantity;

  const newQuantity = unit.quantity * quantity;
  return getGramValue(unit.referenceUnit, newQuantity);
}
 
console.log(`-- 3pce --> cs : ${convertUnit(pce3, cs)}`);
console.log(`-- 6 pce --> 3 pce  : ${convertUnit(pce6, pce3)}`);
console.log(`-- 120 cs --> pce  : ${convertUnit(cs120, pce)}`);
