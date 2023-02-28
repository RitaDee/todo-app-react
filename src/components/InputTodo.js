import PropTypes from 'prop-types';
import { useState } from 'react';

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoItem(title);
    setTitle('');
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo..."
        value={title}
        onChange={handleChange}
      />
      <button type="button">Submit</button>
    </form>
  );
};

InputTodo.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
};

export default InputTodo;
