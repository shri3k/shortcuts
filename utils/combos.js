import asciisToCombos from "./asciisToCombos.js";
import sortedCombos from "./sortedCombos.js";

export default function combos(config) {
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
