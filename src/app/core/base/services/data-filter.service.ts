import { Injectable } from '@angular/core';
import { IDataFilter } from '../interfaces/data/data-filter';
import { Filter } from '../../models/filter';

@Injectable()
export abstract class DataFilterService<T> implements IDataFilter<T> {

  protected filter: Filter = new Filter();

  public getFilter(): Filter {
    return this.filter;
  }

  public setFilter(filter: Filter): void {
    this.filter = filter;
  }

  public abstract filterData(list: T[]): T[];
}
