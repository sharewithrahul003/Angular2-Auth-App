import { Angular2AuthPage } from './app.po';

describe('angular2-auth App', () => {
  let page: Angular2AuthPage;

  beforeEach(() => {
    page = new Angular2AuthPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
