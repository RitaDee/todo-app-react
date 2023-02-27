import { useState } from 'react';
// other imported components here
const TodosLogic = () => {
  const [todos, setTodos] = useState([
    // ...
  ]);

  const addTodoItem = (title) => {
  const newTodo = {
    id: 4,
    title: title,
    completed: false,
  };
  setTodos([...todos, newTodo]);
};


  const delTodo = (id) => {
  setTodos([
    ...todos.filter((todo) => {
      return todo.id !== id;
    }),
  ]);
};

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };
  return (
    <div>
      <InputTodo />
      <TodosList todosProps={todos} handleChange={handleChange} />
    </div>
  );

export default TodosLogic;
