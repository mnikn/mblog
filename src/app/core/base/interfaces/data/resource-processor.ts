export interface IResourceProcessor<T> {
  processResource(): T[];
  /**
   * create resource
   * @param item
   * @return new item with id
   */
  createResource(item: T): T;
  deleteResource(item: T): boolean;
  updateResource(item: T): boolean;
}
