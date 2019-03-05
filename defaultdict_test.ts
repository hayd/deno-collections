import { DefaultDict } from "./defaultdict.ts";
import { test, assert } from "./deps.ts";

test(function defaultdict() {
  const d = new DefaultDict(0);
  assert.equal(d.get("a"), 0);
  const letters = "a a a b b c".split(" ");
  for (const ch of letters) {
    d.set(ch, d.get(ch) + 1);
  }
  const arr = [...d.entries()];
  assert.equal(arr, [["a", 3], ["b", 2], ["c", 1]]);
});
