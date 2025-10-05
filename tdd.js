function capitalize(string) {
  return string.toUpperCase();
}

function reverseString(string) {
  let char = [...string];
  return char.reverse().join("");
}

calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
};

function caesarCipher(str, shift) {
  // Normalize shift to stay within 0–25
  shift = shift % 26;

  return str
    .split("")
    .map((char) => shiftChar(char, shift))
    .join("");
}

// helper function to shift one character
function shiftChar(char, shift) {
  const isUpper = char >= "A" && char <= "Z";
  const isLower = char >= "a" && char <= "z";

  if (!isUpper && !isLower) return char; // leaves punctuation unchanged

  const base = isUpper ? "A".charCodeAt(0) : "a".charCodeAt(0);
  const newCode = ((char.charCodeAt(0) - base + shift + 26) % 26) + base;
  return String.fromCharCode(newCode);
}

function analyzeArray(arr) {
  return {
    average: arr.reduce((sum, curr) => sum + curr, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
