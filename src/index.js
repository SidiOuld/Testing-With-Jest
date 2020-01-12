import "./styles.css";

// install Jest
// yarn add --dev jest

// scripts: {
//   "test": "jest"
// }

// yarn test || npm test

export const sum = (a, b) => a + b;

export const sub = (a, b) => a - b;

export const mul = (a, b) => a * b;

export const rev = str => {
  return str
    .split("")
    .reverse()
    .join("");
};

export const double = arr => {
  return arr.map(num => num * 2);
};

// if (sum(1, 2) === 3) {

// }
