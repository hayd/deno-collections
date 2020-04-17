// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.

export default interface ListNode<T> {
	value: T;
	next: ListNode<T> | undefined;
};
