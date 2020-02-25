import { Stack } from "./mod.ts";
import { assertEquals } from "./deps.ts";

Deno.test(function stack() {
  const s = new Stack([1, 2, 3]);
  // assertEquals(s.peek(), 3);
  s.push(4);
  assertEquals(s.size, 4);
  assertEquals(s.pop(), 4);
  assertEquals(s.pop(), 3);
  assertEquals(s.pop(), 2);
  assertEquals(s.pop(), 1);
  assertEquals(s.pop(), undefined);
  assertEquals(s.size, 0);
});

Deno.test(function stackIter() {
  const s = new Stack([1, 2, 3]);
  const arr = [...s];
  assertEquals(arr, [3, 2, 1]);
});
