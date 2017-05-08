import { ChumFrontendPage } from './app.po';

describe('chum-frontend App', () => {
  let page: ChumFrontendPage;

  beforeEach(() => {
    page = new ChumFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
