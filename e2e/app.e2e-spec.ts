import { ElectronAngular2DemoPage } from './app.po';

describe('electron-angular2-demo App', () => {
  let page: ElectronAngular2DemoPage;

  beforeEach(() => {
    page = new ElectronAngular2DemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
