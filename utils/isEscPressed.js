import MODKEYS from "../constants.js";
import getKeyWithVal from "./getKeyWithVal.js";

export default function isEscPressed(code) {
  return getKeyWithVal(code, MODKEYS) === "esc";
}
