import { Deque } from "./deque.ts";
import { test, assert } from "./deps.ts";

test(function deque() {
  const d = new Deque(3, [1, 2, 3]);
  // assert.equal(s.peek(), 3);
  d.push(4);
  assert.equal(d.size, 3);
  assert.equal(d.pop(), 4);
  assert.equal(d.pop(), 3);
  assert.equal(d.pop(), 2);
  assert.equal(d.pop(), undefined);
  assert.equal(d.size, 0);
});

test(function dequeIter() {
  const d = new Deque(2, [1, 2, 3]);
  const arr = [...d];
  assert.equal(arr, [2, 3]);
});
