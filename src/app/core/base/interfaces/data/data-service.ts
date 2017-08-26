import { IDataPager } from './data-pager';
import { DataOption } from '../../params/data-option';
import { Filter } from '../../../models/filter';
import { IResourceProcessor } from './resource-processor';

export interface IDataService<T> {
  refresh(): void;
  getFilter(): Filter;
  setFilter(filter: Filter): void;
  setDataOption(option: DataOption): void;
  getDataOption(): DataOption;
  getList(): T[];
  getUnProcessList(): T[];
  createItem(item: T): number;
  updateItem(item: T): boolean;
  deleteItem(item: T): boolean;
  getPagerService(): IDataPager<T>;
  registerResourceProcessor(resourceProcessor: IResourceProcessor<T>): void;
  getSelected(): T;
  setSelected(data: T);
}

