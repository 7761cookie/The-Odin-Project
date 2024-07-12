const { capitalise, reverseString, calculate, caesarCipher, analyzer } = require("./script.js");

test("Capitalise the first letter of the string", () => {
    expect(capitalise("hello")).toBe("Hello");
});

test("Reverse the letters in a gven string", () => {
    expect(reverseString("hello")).toBe("olleh");
});

test("Calculate basic opaeration: add", () => {
    expect(calculate.add(2, 3)).toBe(5)
});

test("Calculate basic opaeration: subtract", () => {
    expect(calculate.subtract(8, 3)).toBe(5)
});

test("Calculate basic opaeration: divide", () => {
    expect(calculate.divide(10, 2)).toBe(5)
});

test("Calculate basic opaeration: multiply", () => {
    expect(calculate.multiply(2, 3)).toBe(6)
});
test("Shift within alphabet without wrapping", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("Shift with wrapping from z to a", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Case preservation", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Punctuation and spaces remain unchanged", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test('calculates average, min, max, and length of array', () => {
    expect(analyzer([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});
test('calculates average, min, max, and length of array with negative numbers', () => {
    expect(analyzer([-1, 0, 1])).toEqual({
        average: 0,
        min: -1,
        max: 1,
        length: 3
    });
});
test('return an empty object for an empty array', () => {
    expect(analyzer([])).toEqual({
        average: NaN,
        min: Infinity,
        max: -Infinity,
        length: 0
    })
});