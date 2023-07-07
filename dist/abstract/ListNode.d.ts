/**
 * @author Prithwish Samanta
 */
import NodeValue from "./NodeValue";
/**
 * a class representing a basic element of a linked list having properties - value inherited from {@link NodeValue} class,
 * prev (preceding node reference), next (following node reference) and index of the node
 */
export default class ListNode<T> extends NodeValue<T> {
  private _next;
  private _index;
  private _prev;
  constructor(
    value: T,
    next: ListNode<T> | null,
    index: number,
    prev?: ListNode<T> | null
  );
  get next(): ListNode<T> | null;
  set next(node: ListNode<T> | null);
  get index(): number;
  set index(v: number);
  get prev(): ListNode<T> | null;
  set prev(node: ListNode<T> | null);
  get show(): object;
}
