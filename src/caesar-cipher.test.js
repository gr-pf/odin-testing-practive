import { caesarCipher } from "./caesar-cipher.js";

test("test basic lowercase word", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("test another basic lowercase word", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("test full turn lowercase word", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("test uppercase word", () => {
  expect(caesarCipher("ABC", 3)).toBe("DEF");
});

test("test full turn uppercase word", () => {
  expect(caesarCipher("XYZ", 3)).toBe("ABC");
});

test("test mix-case word", () => {
  expect(caesarCipher("AbC", 3)).toBe("DeF");
});

test("test full turn mix-case word", () => {
  expect(caesarCipher("XyZ", 3)).toBe("AbC");
});

test("test several words", () => {
  expect(caesarCipher("AbC XyZ", 3)).toBe("DeF AbC");
});

test("test several words and symbols", () => {
  expect(caesarCipher("This #3 message, is encrypted!", 4)).toBe(
    "Xlmw #3 qiwweki, mw irgvctxih!",
  );
});

test("test another sentence with words and symbols", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("test case preservation", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("caesar cipher with negative code", () => {
  expect(caesarCipher("B", -1)).toBe("A");
});

test("caesar cipher with big negative code", () => {
  expect(caesarCipher("B", -2601)).toBe("A");
});

test("caesar cipher with negative modulo", () => {
  expect(caesarCipher("A", -1)).toBe("Z");
});
