/**
 *
 * @param {String} string
 */
export function capitalize(string) {
  if (typeof string !== "string") {
    throw new TypeError("the function 'capitalize' only accept strings.");
  }
  const firstChar = string.slice(0, 1);
  const firstCharUpper = firstChar.toUpperCase();
  const otherChar = string.slice(1);
  return firstCharUpper + otherChar;
}
