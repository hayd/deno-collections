import { Queue } from "./mod.ts";
import { assertEquals } from "./deps.ts";

Deno.test(function queue() {
  const q = new Queue([1, 2, 3]);
  // assertEquals(q.peek(), 1);
  q.push(4);
  assertEquals(q.size, 4);
  assertEquals(q.shift(), 1);
  assertEquals(q.shift(), 2);
  assertEquals(q.shift(), 3);
  assertEquals(q.shift(), 4);
  assertEquals(q.shift(), undefined);
  assertEquals(q.size, 0);
});

Deno.test(function queueIter() {
  const q = new Queue([1, 2, 3]);
  const arr = [...q];
  assertEquals(arr, [1, 2, 3]);
});
