import { RxjsVisualizePage } from './app.po';

describe('rxjs-visualize App', () => {
  let page: RxjsVisualizePage;

  beforeEach(() => {
    page = new RxjsVisualizePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
