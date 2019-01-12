import {
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
} from "./helpers.js";

const events = {
  keydown: comboKeys => event => {
    comboKeys.add(event.keyCode);
    console.debug("Event: ", event);
    console.debug("keyCode: ", event.keyCode);
    this.match(sort(comboKeys), evt);
  },
  keyup: comboKeys => event => {
    if (isEscPressed(event.keyCode)) {
      console.debug("Escape pressed -- clearing combo");
      comboKeys = new Set();
    } else {
      console.debug("Removing:", event.keyCode);
      comboKeys.delete(event.keyCode);
      console.debug("Combo after removing", comboKeys);
    }
  },
  blur: comboKeys => () => {
    console.debug("Target out of focus - clearing combo");
    comboKeys = new Set();
  }
};

class ShortcutsC {
  static create(config) {
    return new ShortcutsC(config);
  }

  static generate(minConfig) {
    return new ShortcutsC(generateFullConfigs(minConfig));
  }

  constructor(configs, target) {
    if (typeof document === "undefined") {
      console.error("Currently only supports browser environment");
      return null;
    }
    this.configs = combos(configs);
    console.debug("initial configs", configs);
    this.target = document;
    console.debug("Targetting document");
    this.comboKeys = new Set();
    this.listen();
  }

  listen() {
    const { target, comboKeys } = this;
    const evt = target.addEventListener;
    const { keydown, keyup, blur } = events;

    evt("keydown", keydown(comboKeys));
    evt("keyup", keyup(comboKeys));
    evt("blur", blur(comboKeys));
  }

  unlisten(eventName) {
    this.target.removeEventListener(eventName, events[eventName]);
  }

  match(keys, evt) {
    const ok = asciisToCombos(keys);
    const { configs } = this;
    if (configs[ok]) {
      console.debug("Combo matched", ok);
      configs[ok].action(evt, ok, configs);
    }
    console.groupEnd();
  }
}

export default ShortcutsC;
