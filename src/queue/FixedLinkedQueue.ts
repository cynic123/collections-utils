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
  private _size: number;

  constructor(size: number) {
    super();
    this._size = size;
  }

  get size(): number {
    return this._size;
  }

  private set size(size: number) {
    this._size = size;
  }
}
