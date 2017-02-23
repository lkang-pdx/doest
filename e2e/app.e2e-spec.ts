import { TadaAngular2Page } from './app.po';

describe('tada-angular2 App', function() {
  let page: TadaAngular2Page;

  beforeEach(() => {
    page = new TadaAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
