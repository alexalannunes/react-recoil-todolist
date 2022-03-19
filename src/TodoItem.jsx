import { useRecoilState } from "recoil";
import { todoListState } from "./TodoList";

function TodoItem(item) {
  const [todos, setTodos] = useRecoilState(todoListState);

  const editItemText = ({ target: { value } }) => {
    const newList = todos.map((i) => {
      if (i.id === item.id) {
        return { ...i, text: value };
      }
      return i;
    });

    setTodos(newList);
  };
  const toggleItemCompletion = () => {
    const newList = todos.map((i) => {
      if (i.id === item.id) {
        return { ...i, completed: !item.completed };
      }
      return i;
    });

    setTodos(newList);
  };

  const deleteItem = () => {
    const newList = todos.filter((i) => i.id != item.id);
    setTodos(newList);
  };
  return (
    <li>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.completed}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </li>
  );
}

export { TodoItem };
