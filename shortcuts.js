const modifierPriority = {
  shift: 16,
  ctrl: 17,
  alt: 18
};

function captureKeys(keys) {
  console.log(keys);
}

const isObject = val =>
  Object.prototype.toString.call(val) === "[object Object]";

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

function asciisToCombos(key) {
  return key;
}

function combosToAsciis() {}

function sortedCombos(key) {
  const keys = key.split("+").map(k => {
    const kk = k.toLowerCase();
    return modifierPriority[kk] || kk.charAt(0);
  });

  return keys.sort();
}

function combos(config) {
  const keys = Object.keys(config);

  const sortedComboObj = keys.reduce(
    (acc, k) => ({
      ...acc,
      [asciisToCombos(sortedCombos(k))]: config[k]
    }),
    {}
  );
  return sortedCombos;
}

class ShortcutsC {
  static create(config) {
    return new ShortcutsC(config);
  }

  static generate(minConfig) {
    return new ShortcutsC(generateFullConfigs(minConfig));
  }

  constructor(configs) {
    this.configs = combos(configs);
    this.target = document;
    this.listen();
  }

  listen() {
    const { target } = this;
    let comboKeys = [];
    const evt = target.addEventListener;
    evt("keydown", event => {
      comboKeys.push(event.keyCode);
      console.log(event.keyCode);
      this.perform(comboKeys);
    });

    evt("keyup", event => {
      comboKeys.pop(event);
    });

    evt("blur", () => {
      comboKeys = [];
    });
  }

  unlisten() {
    this.target.removeEventListener();
  }

  perform(keys) {
    const { configs } = this;
    console.log(configs);
  }
}

const shortcuts = {
  "ctrl+alt+k": {
    action: function() {
      console.log(Array.from({ length: 20 }, (x, i) => i));
    }
  }
};

const minConfigs = {
  "ctrl+alt+k": function() {
    console.log("ctrl+alt+k");
  },
  "ctrl+s": function() {
    console.log("ctrl+s");
  }
};

const x = ShortcutsC.generate(minConfigs);
console.log(x);
