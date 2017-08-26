export interface IResourceProcessor<T> {
  processResource(): T[];
  createResource(item: T): boolean;
  deleteResource(item: T): boolean;
  updateResource(item: T): boolean;
}
