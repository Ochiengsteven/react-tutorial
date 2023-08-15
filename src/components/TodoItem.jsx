import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ itemProp }) => <li>{itemProp.title}</li>;
export default TodoItem;

TodoItem.propTypes = {
  itemProp: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
