import { MarvelComicAppPage } from './app.po';

describe('marvel-comic-app App', () => {
  let page: MarvelComicAppPage;

  beforeEach(() => {
    page = new MarvelComicAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
