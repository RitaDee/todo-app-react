 const TodoItem = ({ itemProp, setTodos }) => {

  const handleChange = (id) => {
    console.log('clicked', id);
  };

  return (
    <li>
      <input
        // ...
        onChange={() => handleChange(itemProp.id)}
      />
      {itemProp.title}
    </li>
  );
};
export default TodoItem;
