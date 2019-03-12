// import Shortcuts from "./shortcuts.js";
const Shortcuts = require("./shortcuts");

describe("Shortcut instance", () => {
  test("should create instance with new keyword", () => {
    const shortcut = new Shortcuts();
    expect(shortcut).toBeInstanceOf(Shortcuts);
  });

  test("should create instance with .create method", () => {
    const shortcut = Shortcuts.create();
    expect(shortcut).toBeInstanceOf(Shortcuts);
  });

  test("should create instance with .generate method that takes min config", () => {
    const shortcut = Shortcuts.generate();
    expect(shortcut).toBeInstanceOf(Shortcuts);
  });
});

describe("pass config in different form", () => {
  const minConfig = {
    "ctrl+space": () => {}
  };
  const normalConfig = {
    "ctr+alt+k": {
      action: () => {}
    },
    "ctrl+w": {
      action: () => {}
    }
  };

  test("should accept regular config in new keyword", () => {
    const shortcut = Shortcuts(normalConfig);
    expect(shortcut).toBeInstanceOf(Shortcuts);
  });

  test("should accept min config from .generate method", () => {
    const shortcut = Shortcuts(minConfig);
    expect(shortcut).toBeInstanceOf(Shortcuts);
  });

  test("should accept regular config from .create method", () => {
    const shortcut = Shortcuts.create(normalConfig);
    expect(shortcut).toBeInstanceOf(Shortcuts);
  });
});

describe("capture keypress ", () => {
  let shorcut;
  const minConfig = {
    "ctrl+space": () => {}
  };
  beforeEach(() => {
    shorcut = Shortcuts(minConfig);
  });
  test("capture one key", () => {
    const getkeyboard = code => new KeyboardEvent("keydown", { keyCode: code });
    const key1 = getkeyboard(17);
    const key2 = getkeyboard(32);
    shortcut.target.dispatchEvent(key1);
    shortcut.target.dispatchEvent(key2);
  });
  test("capture two key", () => {});
  test("capture hold and release key", () => {});
  test("capture release everything key", () => {});
});

describe("unlisten", () => {
  test("release all keys", () => {});
  test("release all keys", () => {});
});
