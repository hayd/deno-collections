import { assert, delay } from "./deps.ts";
import { promiseMap } from "./mod.ts";

// TODO add multiple tests! including a success...
Deno.test(async function pmap() {
  const startTime = +new Date();
  let caught: boolean;
  await promiseMap(
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    async (i) => {
      await delay(500);
      if (i === 7) throw new Error();
    },
    3
  ).catch(err => {
    caught = true;
  });
  const elapsed = (+new Date()) - startTime;
  assert(elapsed > 1500);
});
