import React from 'react';
import { bindActionCreators } from 'redux';
import { TextItem } from 'routes/TextItems/components/TextItem';
import { shallow } from 'enzyme';

describe('(Component) TextItem', () => {
  let _props, _spies, _wrapper;

  beforeEach(() => {
    _spies = {};
    _props = {
      text : 'test',
      count: 0,
      itemId: 'testID',
      ...bindActionCreators({
        increment   : (_spies.increment = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    };
    _wrapper = shallow(<TextItem {..._props} />)
  });

  it('renders as a <div>.', () => {
    expect(_wrapper.is('div')).to.equal(true)
  });

  it('renders with an <span class="list-item__text"> that includes item text', () => {
    expect(_wrapper.find('.list-item__text').text()).to.match(/test/);
  });

  it('renders {props.count} inside <span class="list-item__count">', () => {
    expect(_wrapper.find('.list-item__count').text()).to.match(/0$/);
    _wrapper.setProps({ count: 8 });
    expect(_wrapper.find('.list-item__count').text()).to.match(/8$/)
  });

  it('renders exactly one button.', () => {
    expect(_wrapper.find('button')).to.have.length(1)
  });

  describe('Increment', () => {
    let _button;

    beforeEach(() => {
      _button = _wrapper.find('button').filterWhere(a => a.text() === 'Increment')
    });

    it('exists', () => {
      expect(_button).to.exist();
    });

    it('is a primary button', () => {
      expect(_button.hasClass('btn btn-primary list-item__button')).to.be.true();
    });

    it('Calls props.increment when clicked', () => {
      _spies.dispatch.should.have.not.been.called();

      _button.simulate('click');

      _spies.dispatch.should.have.been.called();
      _spies.increment.should.have.been.called()
    })
  });

});
