/*
 * Deque is an Array-like structure with a max size.
 *
 * Create by optionally passing an Iterable:
 *
 *      const q = new Deque(2, [1, 2, 3])
 *      console.log([...q])  // [2, 3]
 *
 */
export class Deque<T> implements Iterable<T> {
  private _array: T[];
  private _maxSize: number;
  constructor(size: number, ls?: Iterable<T>) {
    this._array = ls ? [...ls].slice(-size) : [];
    this._maxSize = size;
  }
  private isFull(): boolean {
    return this._array.length == this._maxSize;
  }
  clear(): void {
    this._array = [];
  }
  shift(): T {
    return this._array.shift();
  }
  pop(): T {
    return this._array.pop();
  }
  push(value): void {
    if (this.isFull) {
      this._array.shift();
    }
    this._array.push(value);
  }
  unshift(value): void {
    if (this.isFull) {
      this._array.pop();
    }
    this._array.unshift(value);
  }
  get size(): number {
    return this._array.length;
  }

  [Symbol.iterator]() {
    return this._array[Symbol.iterator]();
  }
}
