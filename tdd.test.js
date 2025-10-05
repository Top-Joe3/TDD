const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./tdd.js");

test("capitalize", () => {
  expect(capitalize("capital")).toBe("CAPITAL");
});

test("reverseString", () => {
  expect(reverseString("reverse")).toBe("esrever");
});

test("add", () => {
  expect(calculator.add(5, 1)).toBe(6);
});
test("subtract", () => {
  expect(calculator.subtract(5, 1)).toBe(4);
});
test("multiply", () => {
  expect(calculator.multiply(5, 2)).toBe(10);
});
test("divide", () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test("wraps from z to a", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("preserves case", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("leaves punctuation unchanged", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyse array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
