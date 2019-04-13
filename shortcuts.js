import {
  getKeyWithVal,
  getModifier,
  captureKeys,
  generateFullConfigs,
  asciisToCombos,
  sort,
  combos,
  isEscPressed
} from "./utils/index.js";

import events from "./events.js";

/**
 * combo based - if certain keys are pressed then it automatically starts 
 *               aggregating on the combos
 * 
 * time based - all keys are considered combos based on the specified time
 *              author specifies on
 */
class Shortcuts {
  static create(config) {
    return new Shortcuts(config);
  }

  static generate(minConfig) {
    return new Shortcuts(generateFullConfigs(minConfig));
  }

  constructor(configs, target, opts={start: false}) {
    if (typeof document === "undefined") {
      console.error("Currently only supports browser environment");
      return null;
    }
    this.configs = combos(configs);
    console.debug("initial configs", configs);
    this.target = document;

    if (opts.start) {
      this.listenAll();
    }
  }

  shortcuts() {
    return this.configs;
  }

  listenAll() {
    this.unlistenAll();
    const { target, configs } = this;
    const evt = target.addEventListener;
    const { keydown, keyup, blur } = events(configs);

    evt("keydown", keydown);
    evt("keyup", keyup);
    evt("blur", blur);
  }

  unlisten(eventName) {
    const { events, target } = this;
    target.removeEventListener(eventName, events()[eventName]);
  }

  unlistenAll() {
    Object.keys(events()).forEach(e => unlisten(e));
  }
}

export default Shortcuts;
