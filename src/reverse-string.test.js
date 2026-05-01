import { reverseString } from "./reverse-string.js";

test("reverse a single lowercase word", () => {
  expect(reverseString("string")).toBe("gnirts");
});

test("reverseString another lowercase word", () => {
  expect(reverseString("anotherstring")).toBe("gnirtsrehtona");
});

test("reverseString a word that starts with a number", () => {
  expect(reverseString("123abc")).toBe("cba321");
});

test("reverseString a sentence", () => {
  expect(reverseString("this is a sentence")).toBe("ecnetnes a si siht");
});

test("throw error with number", () => {
  expect(() => reverseString(123)).toThrow(TypeError);
});

test("throw error with number", () => {
  expect(() => reverseString(123)).toThrow(
    "the function 'reverseString' only accept strings.",
  );
});
