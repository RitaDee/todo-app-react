import { useState } from 'react';
const InputTodo = () => {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
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
