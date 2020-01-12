//he AAA pattern - Arrange, Act, Assert
import { sum, sub, mul, rev, double } from "./index";

test("sum function", () => {
  expect(sum(2, 2)).toBe(4);
  expect(sum(2, 5)).toBe(7);
});

test("sub function", () => {
  expect(sub(2, 2)).toBe(0);
  expect(sub(10, 5)).toBe(5);
});

test("mul function", () => {
  expect(mul(5, 3)).toBe(15);
});

test("rev function", () => {
  expect(rev("sidi")).toBe("idis");
});

test("double function", () => {
  expect(double([2, 5])).toEqual([4, 10]);
});
