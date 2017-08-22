export interface IHotkeyService {
  bindKey(key: string, action: () => void): IHotkeyService;
  clear(): void;
}
