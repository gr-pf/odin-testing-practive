export const calculator = {
  add: function (a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new TypeError("a and b must be numbers.");
    }
    return a + b;
  },

  subtract: function (a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new TypeError("a and b must be numbers.");
    }
    return a - b;
  },

  divide: function (a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new TypeError("a and b must be numbers.");
    }
    if (b === 0) {
      throw Error("Cannot divided by 0.");
    }
    return a / b;
  },

  multiply: function (a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new TypeError("a and b must be numbers.");
    }
    return a * b;
  },
};
