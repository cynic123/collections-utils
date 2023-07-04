/**
 * @author Prithwish Samanta
 */
import Queue from "../abstract/Queue";
import LinkedQueue from "./LinkedQueue";
/**
 * A LinkedQueue implementation with size restrictions imposed
 */
export default class FixedLinkedQueue<T>
  extends LinkedQueue<T>
  implements Queue<T>
{
  private _size;
  constructor(size: number);
  get size(): number;
  private set size(value);
}
