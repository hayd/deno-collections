import { Deferred, deferred } from "./deps.ts";
import { Queue } from "./queue.ts";

export class DeferredQueue<T> {
  private _array: Array<T>;
  private _queue: Queue<Deferred<T>>;
  private _maxSize: number;
  private _size: number;
  private _untilEmpty?: Promise<void>;

  constructor(
    maxPoolSize: number = 10,
    initialPool?: Iterable<T>,
    private _creator?: () => T | Promise<T>
  ) {
    this._maxSize = maxPoolSize;
    this._array = initialPool ? [...initialPool] : [];
    this._size = this._array.length;
    this._queue = new Queue();
  }

  async pop(): Promise<T> {
    if (this._array.length > 0) {
      return this._array.pop()!;
    } else if (this._size < this._maxSize && this._creator) {
      this._size++;
      return await this._creator();
    }
    const d = deferred<T>();
    this._queue.push(d);
    await d;
    return this._array.pop()!;
  }

  push(value: T): void {
    this._array.push(value);
    if (this._queue.size > 0) {
      const d = this._queue.shift()!;
      d.resolve();
    }
  }

  get size(): number {
    return this._size;
  }

  get available(): number {
    return this._array.length;
  }

  async untilEmpty(): Promise<void> {
    if (this._untilEmpty !== undefined) {
      return this._untilEmpty;
    }
    // We set this in case a user calls untilEmpty twice.
    this._untilEmpty = (async () => {
      do {
        const d = deferred<T>();
        this._queue.push(d);
        await d;
      } while (this.size !== this.available);
      this._untilEmpty = undefined;
    })();
    return this._untilEmpty;
  }

  // TODO implement Iterator
}
