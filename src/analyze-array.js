/**
 *
 * @param {[Number]} arr
 * @returns {Object}
 */
export function analyzeArray(arr) {
  let obj = { average: null, min: null, max: null, length: 0 };
  if (arr.length === 0) {
    return obj;
  }
  const arrLength = arr.length;
  const maxArr = Math.max(...arr);
  const minArr = Math.min(...arr);
  const total = arr.reduce((prev, curr) => prev + curr, 0);
  const avg = total / arrLength;
  obj.average = avg;
  obj.min = minArr;
  obj.max = maxArr;
  obj.length = arrLength;
  return obj;
}
