import MODKEYS from "../constants.js";
import sort from "./sort.js";

export default function sortedCombos(key) {
  const keys = key.split("+").map(k => {
    const kk = k.toLowerCase();
    return MODKEYS[kk] || kk.charCodeAt(0);
  });

  return sort(keys);
}
