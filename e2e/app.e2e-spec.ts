import { Session5Assignment1Page } from './app.po';

describe('session5-assignment1 App', () => {
  let page: Session5Assignment1Page;

  beforeEach(() => {
    page = new Session5Assignment1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
