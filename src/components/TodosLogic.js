import { useState } from 'react';
// other imported components here
const TodosLogic = () => {
  const [todos, setTodos] = useState([
    // ...
  ]);

  const addTodoItem = (title) => {
    // update state with user's input
  };
  return (
    <div>
      <InputTodo addTodoItem={addTodoItem} />
      {/* ... */}
    </div>
  );
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
};

export default TodosLogic;
