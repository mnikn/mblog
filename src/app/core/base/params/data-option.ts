export class DataOption {
  public useFilter: boolean;
  public usePager: boolean;
  public useSort: boolean;

  constructor(useFilter = true, usePager = false, useSort = true) {
    this.useFilter = useFilter;
    this.usePager = usePager;
    this.useSort = useSort;
  }
}
