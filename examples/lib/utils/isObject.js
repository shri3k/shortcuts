const isObject = val =>
  Object.prototype.toString.call(val) === "[object Object]";

export default isObject;
