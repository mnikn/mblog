import { IDataPager } from './data-pager';
import { DataOption } from '../../params/data-option';
import { Filter } from '../../../models/filter';
import { IResourceProcessor } from './resource-processor';
import { IIdentifiable } from '../models/identifiable';

export interface IDataService<T extends IIdentifiable> {
  /**
   * filter
   */
  getFilter(): Filter;
  setFilter(filter: Filter): void;

  /**
   * pager
   */
  getPagerService(): IDataPager<T>;

  /**
   * data operate
   */
  refresh(afterCallback?: () => any): void;
  getItem(id: number): T;
  getList(): T[];
  getUnProcessList(): T[];
  createItem(item: T, successCallback?: () => any): number;
  updateItem(item: T, successCallback?: () => any): boolean;
  deleteItem(item: T, successCallback?: () => any): boolean;
  registerResourceProcessor(resourceProcessor: IResourceProcessor<T>): void;
  setDataOption(option: DataOption): void;
  getDataOption(): DataOption;
  getSelected(): T;
  setSelected(id: number);
  onDataModify(callback: () => any): void;

  /**
   * when we change the way process originList,eg: change the filter or pager
   */
  onProcessMethodChange(callback: () => any): void;

}

