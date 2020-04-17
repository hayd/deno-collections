// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.

export default interface TreeNode<T> {
  value: T;
  left: TreeNode<T> | undefined;
  right: TreeNode<T> | undefined;
}
