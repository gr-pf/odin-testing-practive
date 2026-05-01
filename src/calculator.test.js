import { calculator } from "./calculator.js";

// Tests for add
test("basic addition", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test("another basic addition", () => {
  expect(calculator.add(2, 4)).toBe(6);
});

test("adding a positive integer and a negative integer", () => {
  expect(calculator.add(2, -4)).toBe(-2);
});

test("adding negative integers", () => {
  expect(calculator.add(-2, -4)).toBe(-6);
});

test("adding with 0", () => {
  expect(calculator.add(3, 0)).toBe(3);
});

test("adding two decimals", () => {
  expect(calculator.add(3.2, 0.4)).toBeCloseTo(3.6);
});

test("add: throw error with string", () => {
  expect(() => calculator.add("3.2", 0.4)).toThrow(TypeError);
});

// Tests for subtract
test("basic subtraction", () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

test("another basic subtraction", () => {
  expect(calculator.subtract(8, 4)).toBe(4);
});

test("subtracting a positive integer and a negative integer", () => {
  expect(calculator.subtract(2, -4)).toBe(6);
});

test("subtracting negative integers", () => {
  expect(calculator.subtract(-2, -4)).toBe(2);
});

test("subtracting with 0", () => {
  expect(calculator.subtract(3, 0)).toBe(3);
});

test("subtracting two decimals", () => {
  expect(calculator.subtract(3.2, 0.4)).toBeCloseTo(2.8);
});

test("subtract: throw error with string", () => {
  expect(() => calculator.subtract("3", 4)).toThrow(TypeError);
});

// Tests for divide
test("basic division", () => {
  expect(calculator.divide(3, 2)).toBeCloseTo(1.5);
});

test("another basic division", () => {
  expect(calculator.divide(8, 4)).toBe(2);
});

test("divising a positive integer and a negative integer", () => {
  expect(calculator.divide(2, -4)).toBeCloseTo(-0.5);
});

test("divising negative integers", () => {
  expect(calculator.divide(-2, -4)).toBeCloseTo(0.5);
});

test("divising with 0", () => {
  expect(() => calculator.divide(3, 0)).toThrow("Cannot divided by 0.");
});

test("divising two decimals", () => {
  expect(calculator.divide(3.2, 0.4)).toBe(8);
});

test("subtract: throw error with string", () => {
  expect(() => calculator.divide("3", 4)).toThrow(TypeError);
});

// Tests for multiply
test("basic multiplication", () => {
  expect(calculator.multiply(3, 2)).toBeCloseTo(6);
});

test("another basic multiplication", () => {
  expect(calculator.multiply(8, 4)).toBe(32);
});

test("mutliplying a positive integer and a negative integer", () => {
  expect(calculator.multiply(2, -4)).toBe(-8);
});

test("mutliplying negative integers", () => {
  expect(calculator.multiply(-2, -4)).toBe(8);
});

test("mutliplying with 0", () => {
  expect(calculator.multiply(3, 0)).toBe(0);
});

test("mutliplying two decimals", () => {
  expect(calculator.multiply(3.2, 0.4)).toBeCloseTo(1.28);
});

test("subtract: throw error with string", () => {
  expect(() => calculator.multiply("3", 4)).toThrow(TypeError);
});
