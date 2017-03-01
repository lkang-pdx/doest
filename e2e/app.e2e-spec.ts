import { doestPage } from './app.po';

describe('doest App', function() {
  let page: doestPage;

  beforeEach(() => {
    page = new doestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
