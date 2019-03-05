import { Queue } from "./queue.ts";
import { assert, test } from "./deps.ts";

test(function queue() {
  const q = new Queue([1, 2, 3]);
  // assert.equal(q.peek(), 1);
  q.push(4);
  assert.equal(q.size, 4);
  assert.equal(q.shift(), 1);
  assert.equal(q.shift(), 2);
  assert.equal(q.shift(), 3);
  assert.equal(q.shift(), 4);
  assert.equal(q.shift(), undefined);
  assert.equal(q.size, 0);
});

test(function queueIter() {
  const q = new Queue([1, 2, 3]);
  const arr = [...q];
  assert.equal(arr, [1, 2, 3]);
});
