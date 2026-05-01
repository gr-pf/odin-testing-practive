/**
 *
 * @param {String} string
 */
export function reverseString(string) {
  if (typeof string !== "string") {
    throw new TypeError("the function 'reverseString' only accept strings.");
  }
  return string.split("").reverse().join("");
}

//reverseString(123);
