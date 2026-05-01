import { capitalize } from "./capitalize.js";

test("capitalize a single lowercase word", () => {
  expect(capitalize("string")).toBe("String");
});

test("capitalize another lowercase word", () => {
  expect(capitalize("anotherstring")).toBe("Anotherstring");
});

test("capitalize a word that starts with a number", () => {
  expect(capitalize("123abc")).toBe("123abc");
});

test("capitalize a sentence", () => {
  expect(capitalize("this is a sentence")).toBe("This is a sentence");
});

test("throw error with number", () => {
  expect(() => capitalize(123)).toThrow(TypeError);
});

test("throw error with number", () => {
  expect(() => capitalize(123)).toThrow(
    "the function 'capitalize' only accept strings.",
  );
});
