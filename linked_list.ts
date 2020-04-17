// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.

import ListNode from './list_node.ts';

export default class LinkedList<T> {
	public head: ListNode<T> | undefined = undefined;
	public tail: ListNode<T> | undefined = undefined;
	public length: number = 0;

	constructor() {}

	private create(item: T): ListNode<T> {
		return {
			value: item,
			next: undefined
		};
	}

	add(item: T, index?: number): LinkedList<T> {
		if (!index) index = this.length;
		if (index < 0 || index > this.length || !item) return this;
		const newNode = this.create(item);
		if (this.length === 0 || this.tail === undefined) {
			this.head = newNode;
			this.tail = newNode;
		} else if (index === this.length) {
			this.tail.next = newNode;
			this.tail = newNode;
		} else if (index === 0) {
			newNode.next = this.head;
			this.head = newNode;
		} else {
			let prev = this.head;
			if (prev === undefined) return this;
			let i = 0;
			while (prev.next && i < this.length) {
				prev = prev.next;
			}
			newNode.next = prev.next;
			prev.next = newNode;
		}
		this.length++;
		return this;
	}

	public clear() {
		this.head = undefined;
		this.tail = undefined;
		this.length = 0;
		return this;
	}

	public toArray(): T[] {
		return [ ...this ];
	}

	public *[Symbol.iterator](): IterableIterator<T> {
		for (let cur = this.head; cur !== undefined; cur = cur.next) {
			yield cur.value;
		}
	}

	public shift(): ListNode<T> | undefined {
		if (this.head === undefined) return undefined;
		else if (this.head.next === undefined) {
			let result = this.head;
			this.head = undefined;
			result.next = undefined;
			return result;
		} else {
			let result = this.head;
			this.head = this.head.next;
			result.next = undefined;
			return result;
		}
	}
}
