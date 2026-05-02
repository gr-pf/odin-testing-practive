import { analyzeArray } from "./analyze-array.js";

test("test basic array with one value", () => {
  expect(analyzeArray([3])).toEqual({ average: 3, min: 3, max: 3, length: 1 });
});

test("test basic array with another value", () => {
  expect(analyzeArray([4])).toEqual({ average: 4, min: 4, max: 4, length: 1 });
});

test("test array with multiple values", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("test array with min last place", () => {
  expect(analyzeArray([2, 0])).toEqual({
    average: 1,
    min: 0,
    max: 2,
    length: 2,
  });
});

test("test array with max last place", () => {
  expect(analyzeArray([2, 4])).toEqual({
    average: 3,
    min: 2,
    max: 4,
    length: 2,
  });
});

test("test empty array", () => {
  expect(analyzeArray([])).toEqual({
    average: null,
    min: null,
    max: null,
    length: 0,
  });
});

test("test array with multiple values float", () => {
  expect(analyzeArray([1, 8, 3.3, 4, 2.4, 5.3])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("test array with multiple other values float", () => {
  expect(analyzeArray([1, 9, 3.3, 4, 1.4, 5.3])).toEqual({
    average: 4,
    min: 1,
    max: 9,
    length: 6,
  });
});
