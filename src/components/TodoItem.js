const TodoItem = ({ itemProp, handleChange }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
      />
      <button>Delete</button>
      {itemProp.title}
    </li>
  );
};

export default TodoItem;
