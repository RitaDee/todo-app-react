const TodoItem = ({ itemProp, setTodos }) => (
  <li>
    <input type="checkbox" />
    {itemProp.title}
  </li>
);
export default TodoItem;
