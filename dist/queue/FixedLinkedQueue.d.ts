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
  constructor(size: number);
}
