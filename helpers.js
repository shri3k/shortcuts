import MODKEYS from "./constants.js";

const isObject = val =>
  Object.prototype.toString.call(val) === "[object Object]";

function getKeyWithVal(val, haystack) {
  return Object.keys(haystack).find(k => val === haystack[k]);
}

function getModifier(code) {
  return getKeyWithVal(code, MODKEYS);
}

function captureKeys(keys) {
  console.log(keys);
}

function generateFullConfigs(minConfig) {
  if (!isObject(minConfig)) {
    throw Error("Given value must be an object");
  }

  return Object.keys(minConfig).reduce(
    (acc, k) => ({
      ...acc,
      [k]: {
        action: minConfig[k]
      }
    }),
    {}
  );
}

function arrangeKeyOrders(keys) {}

function asciisToCombos(keys) {
  const combo = keys.reduce(
    (acc, k) =>
      acc.concat(getModifier(k) || String.fromCharCode(k)).concat("+"),
    ""
  );
  return combo.slice(0, -1).toLowerCase();
}

function combosToAsciis() {}

function sort(combos) {
  return Array.from(combos).sort((a, b) => a - b);
}

function sortedCombos(key) {
  const keys = key.split("+").map(k => {
    const kk = k.toLowerCase();
    return MODKEYS[kk] || kk.charCodeAt(0);
  });

  return sort(keys);
}

function combos(config) {
  const keys = Object.keys(config);

  const sortedCombo = keys.reduce(
    (acc, k) => ({
      ...acc,
      [asciisToCombos(sortedCombos(k))]: config[k]
    }),
    {}
  );
  return sortedCombo;
}

function isEscPressed(code) {
  return getKeyWithVal(code, MODKEYS) === "esc";
}

export {
  getKeyWithVal,
  getModifier,
  captureKeys,
  generateFullConfigs,
  arrangeKeyOrders,
  asciisToCombos,
  combosToAsciis,
  sort,
  sortedCombos,
  combos,
  isEscPressed
};
