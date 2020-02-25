import { DeferredQueue } from "./deferred_queue.ts";

export async function promiseMap<T, U>(
  it: Iterable<T>,
  fn: (t: T) => Promise<U>,
  concurrency: number
): Promise<Array<U>> {
  const q = new DeferredQueue<void>(concurrency, [], () => undefined);
  const results: Array<U> = [];
  let err: any;
  for (const i of it) {
    await q.pop();
    fn(i)
      .then(u => {
        results.push(u);
      })
      .catch(e => {
        err = e;
      })
      .then(() => q.push());
  }
  await q.untilEmpty();
  if (err) throw err;
  return results;
}
