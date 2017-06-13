import TextItemsRoute from 'routes/TextItems';

describe('(Route) Counter', () => {
  it('returns a route configuration object', () => {
    expect(typeof TextItemsRoute({})).to.equal('object');
  });

  it('has a path \'textItems\'', () => {
    expect(TextItemsRoute({}).path).to.equal('textItems');
  });
});
