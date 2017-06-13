import React from 'react';
import PropTypes from 'prop-types';

export const TextItem = ({ text, count, increment, itemId }) => {
  const bindedIncrement = increment.bind(this, itemId, 1);

  return (
    <div>
      <span className='list-item__text'>{text}</span>
      <span className='list-item__count'>Count: {count}</span>
      <button className='btn btn-primary list-item__button' onClick={bindedIncrement}>
        Increment
      </button>
    </div>
  );
};

TextItem.propTypes = {
  itemId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
};

export default TextItem;
