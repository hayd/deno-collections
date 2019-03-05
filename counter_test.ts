import { Counter } from "./counter.ts";
import { test, assert } from "./deps.ts";

test(function counter() {
  const letters = "a a a b b c".split(" ");
  const d = new Counter(letters);
  const arr = [...d.entries()];
  assert.equal(arr, [["a", 3], ["b", 2], ["c", 1]]);
});

test(function mostCommon() {
  const letters = "a a a b b c".split(" ");
  const d = new Counter(letters);
  const mc = d.mostCommon(2);
  const arr = [...mc.entries()];
  assert.equal(arr, [["a", 3], ["b", 2]]);
});
