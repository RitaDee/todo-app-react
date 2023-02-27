import { useState } from 'react';

const InputTodo = () => {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setTitle('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoItem(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo..."
        value={title}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
};
export default InputTodo;
