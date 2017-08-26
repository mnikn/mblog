import { DataOption } from '../../params/data-option';
import { Filter } from '../../../models/filter';
import { IDataPager } from './data-pager';
import { IResourceProcessor } from './resource-processor';
import { IIdentifiable } from '../models/identifiable';

export interface IDataResource<T extends IIdentifiable> {
  refresh(): void;
  getFilter(): Filter;
  setFilter(filter: Filter): void;
  setDataOption(option: DataOption): void;
  getDataOption(): DataOption;
  getItem(id: number): T;
  getList(): T[];
  getUnProcessList(): T[];
  add(item: T): number;
  update(item: T): boolean;
  remove(item: T): boolean;
  getPagerService(): IDataPager<T>;
  registerResourceProcessor(resourceProcessor: IResourceProcessor<T>): void;
}
