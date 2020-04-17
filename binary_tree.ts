// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.

import BinaryTreeNode from './binary_tree_node.ts';

export default class BinaryTree<T> {
	public root: BinaryTreeNode<T> | undefined = undefined;
	public length: number = 0;

	constructor() {}

	private create(item: T): BinaryTreeNode<T> {
		return {
			value: item,
			left: undefined,
			right: undefined
		};
	}

	public add(item: T): BinaryTree<T> {
		if (this.root === undefined) this.root = this.create(item);
		else {
			let tree_pointer = this.root;
			while (tree_pointer !== undefined) {
				if (tree_pointer.value === item) break;
				else if (tree_pointer.value > item) {
					if (tree_pointer.left === undefined) {
						tree_pointer.left = this.create(item);
					} else {
						tree_pointer = tree_pointer.left;
					}
				} else if (tree_pointer.value < item) {
					if (tree_pointer.right === undefined) {
						tree_pointer.right = this.create(item);
					} else {
						tree_pointer = tree_pointer.right;
					}
				}
			}
		}
		this.length++;
		return this;
	}
}
