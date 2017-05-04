import { Angular2PromiseButtonsPage } from './app.po';

describe('angular2-promise-buttons App', () => {
  let page: Angular2PromiseButtonsPage;

  beforeEach(() => {
    page = new Angular2PromiseButtonsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
