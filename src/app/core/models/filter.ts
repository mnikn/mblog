export class Filter {
  public isSpecific: boolean;
  public searchValue: string;

  constructor(isSpecific = false, searchValue = '') {
    this.isSpecific = isSpecific;
    this.searchValue = searchValue;
  }
}
