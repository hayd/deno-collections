import { assertEquals } from './test_deps.ts';
import BinaryTree from './binary_tree.ts';
import TreeNode from './binary_tree_node.ts';

Deno.test(function binaryTree() {
	const tree = new BinaryTree<number>();
	tree.add(10);
	assertEquals(tree.root, { value: 10, left: undefined, right: undefined } as TreeNode<number>);
	assertEquals(tree.length, 1);
	tree.add(5);
	assertEquals(tree.root!.left, { value: 5, left: undefined, right: undefined } as TreeNode<number>);
	assertEquals(tree.length, 2);
	tree.add(15);
	assertEquals(tree.root!.right, { value: 15, left: undefined, right: undefined } as TreeNode<number>);
	assertEquals(tree.length, 3);
	tree.add(7);
	assertEquals(tree.root!.left!.right, { value: 7, left: undefined, right: undefined } as TreeNode<number>);
	assertEquals(tree.length, 4);
	tree.add(3);
	assertEquals(tree.root!.left!.left, { value: 3, left: undefined, right: undefined } as TreeNode<number>);
	assertEquals(tree.length, 5);
});
