import { sort, asciisToCombos } from "./utils/index.js";
import isEscPressed from "./utils/isEscPressed.js";

export default function(configs) {
  let comboKeys = new Set();
  const action = (keys, evt) => {
    const combos = asciisToCombos(keys);
    if (configs[combos]) {
      configs[combos].action(event, combos, configs);
    }
  };

  function clearCombos() {
    comboKeys = new Set();
  }

  return {
    keydown: event => {
      comboKeys.add(event.keyCode);
      console.debug("Event: ", event);
      console.debug("keyCode: ", event.keyCode);
      action(sort(comboKeys), event);
    },
    keyup: event => {
      if (isEscPressed(event.keyCode)) {
        console.debug("Escape pressed -- clearing combo");
        clearCombos();
      } else {
        console.debug("Removing:", event.keyCode);
        comboKeys.delete(event.keyCode);
        console.debug("Combo after removing", comboKeys);
      }
    },
    blur: () => {
      console.debug("Target out of focus - clearing combo");
      clearCombos();
    }
  };
}
