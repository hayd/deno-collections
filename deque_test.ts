import { Deque } from "./mod.ts";
import { assertEquals } from "./deps.ts";

Deno.test(function deque() {
  const d = new Deque(3, [1, 2, 3]);
  // assertEquals(s.peek(), 3);
  d.push(4);
  assertEquals(d.size, 3);
  assertEquals(d.pop(), 4);
  assertEquals(d.pop(), 3);
  assertEquals(d.pop(), 2);
  assertEquals(d.pop(), undefined);
  assertEquals(d.size, 0);
});

Deno.test(function dequeIter() {
  const d = new Deque(2, [1, 2, 3]);
  const arr = [...d];
  assertEquals(arr, [2, 3]);
});
