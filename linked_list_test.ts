import { assertEquals } from "./test_deps.ts";
import LinkedList from "./linked_list.ts";
import ListNode from "./list_node.ts";

Deno.test(function linkedList() {
  const ll = new LinkedList<number>();
  assertEquals(ll.length, 0);
  ll.add(1);
  assertEquals(ll.length, 1);
  ll.add(2);
  assertEquals(ll.length, 2);
  ll.add(3);
  assertEquals(ll.length, 3);
  ll.add(4);
  assertEquals(ll.length, 4);
  assertEquals(ll.toArray(), [1, 2, 3, 4]);
  assertEquals(ll.shift(), { value: 1, next: undefined } as ListNode<number>);
  assertEquals(ll.clear(), new LinkedList<number>());
});
