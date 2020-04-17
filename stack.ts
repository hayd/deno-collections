// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.

/*
 * Stack is a first-in-last-out data structure.
 * Stack supports `push` to the end and `pop` from the end.
 *
 *      const s = [1, 2, 3]
 *      console.log(s.pop())  // 3
 *
 */

export interface Stack<T> {
  pop(): T | undefined;
  push(value: T): void;
  length?: number;
}

export class Stack<T> implements Iterable<T> {
  private _array: T[];

  clear(): void {
    this._array = [];
  }

  [Symbol.iterator]() {
    return this._array[Symbol.iterator]();
  }
}
