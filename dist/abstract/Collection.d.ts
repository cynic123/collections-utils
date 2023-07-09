/**
 * @author Prithwish Samanta
 */
/**
 * A collection represents a group of objects, known as its elements. Some collections allow duplicate elements and others
 * do not. Some are ordered and others unordered
 */
export default interface Collection<T> {
  /**
   * @returns the size of the collection
   */
  size(): number;
  /**
   * @returns if the collection is empty
   */
  isEmpty(): boolean;
  /**
   * @returns an array containing all of the elements in this collection
   */
  toArray(): T[];
  /**
   * removes all the elements in the collection, the collection will be empty after this method returns
   */
  clear(): void;
  /**
   * inserts the given element to the collection
   * @param data element to be inserted in the collection, position of insertion is specific to implementations
   */
  add(data: T): void | Error;
  /**
   * deletes the given element from the collection
   * @param data element to be deleted from the collection, position of deletion is specific to implementations
   * @returns the value of the element deleted
   */
  remove(data: T): T | null;
}
