import getModifier from "./getModifier.js";

export default function asciisToCombos(keys) {
  const combo = keys.reduce(
    (acc, k) =>
      acc.concat(getModifier(k) || String.fromCharCode(k)).concat("+"),
    ""
  );
  return combo.slice(0, -1).toLowerCase();
}
