import {
  COUNTER_INCREMENT,
  increment,
  doubleAsync,
  default as textItemsReducer
} from 'routes/TextItems/modules/textItems'

describe('(Redux Module) TextItems', () => {
  it('Should export a constant COUNTER_INCREMENT.', () => {
    expect(COUNTER_INCREMENT).to.equal('COUNTER_INCREMENT')
  });

  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(textItemsReducer).to.be.a('function');
    });

    it('Should initialize with a state of 0 (Number).', () => {
      expect(textItemsReducer(undefined, {})).to.deep.equal({ items: [] });
    });

    it('Should return the previous state if an action was not matched.', () => {
      let state = textItemsReducer(undefined, {});
      expect(state).to.deep.equal({ items: [] });
      state = textItemsReducer(state, { type: '@@@@@@@' });
      expect(state).to.deep.equal({ items: [] });
      state = textItemsReducer(state, increment(5));
      expect(state).to.deep.equal({ items: [] });
      state = textItemsReducer(state, { type: '@@@@@@@' });
      expect(state).to.deep.equal({ items: [] });
    })
  });

  describe('(Action Creator) increment', () => {
    it('Should be exported as a function.', () => {
      expect(increment).to.be.a('function');
    });

    it('Should return an action with type "COUNTER_INCREMENT".', () => {
      expect(increment()).to.have.property('type', COUNTER_INCREMENT);
    });

    it('Should have property payload', () => {
      expect(increment()).to.have.property('payload');
    });

    it('Should assign arguments correct properties.', () => {
      expect(increment('testId', 5).payload).to.deep.equal({ itemId: 'testId', value: 5 });
    });

    it('Should default the "payload" property', () => {
      expect(increment().payload).to.deep.equal({ itemId: '', value: 1 });
    });
  });
});
