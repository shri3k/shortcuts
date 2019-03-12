import MODKEYS from "../constants.js";
import getKeyWithVal from "./getKeyWithVal.js";

export default function getModifier(code) {
  return getKeyWithVal(code, MODKEYS);
}
