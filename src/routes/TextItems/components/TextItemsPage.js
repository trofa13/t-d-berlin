import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import TextItem from './TextItem';

export const TextItemsPage = ({ items, increment, addItem, resetState }) => (
  <div>
    <Form addItem={addItem} />

    <ul className='list-unstyled'>
      {items.map((item) => (
        <li key={item.id} className='list-item'>
          <TextItem text={item.text} count={item.count} increment={increment} itemId={item.id} />
        </li>
      ))}
    </ul>

    <button className='btn btn-primary' type='button' onClick={resetState}> Reset state </button>
  </div>
);

TextItemsPage.propTypes = {
  increment: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  addItem: PropTypes.func.isRequired,
  resetState: PropTypes.func.isRequired
};

export default TextItemsPage;
