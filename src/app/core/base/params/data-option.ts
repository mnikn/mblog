export class DataOption {
  public useFilter: boolean;
  public usePager: boolean;

  constructor(useFilter = true, usePager = false) {
    this.useFilter = useFilter;
    this.usePager = usePager;
  }
}
