import { useState } from 'react';

const InputTodo = ( { addTodoItem } ) => {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setTitle('');
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  if (title.trim()) {
    addTodoItem(title);
    setTitle('');
    setMessage('');
  } else {
    setMessage('Please add item');
  }
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
