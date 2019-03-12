import isObject from "./isObject.js";

export default function generateFullConfigs(minConfig) {
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
