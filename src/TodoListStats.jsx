import { selector, useRecoilValue } from "recoil";
import { todoListState } from "./TodoList";

const todoListStatsState = selector({
  key: "TodoListStats",
  get: ({ get }) => {
    const todos = get(todoListState);

    const total = todos.length;
    const pending = todos.filter((item) => !item.completed).length;
    const doned = todos.filter((item) => item.completed).length;
    const percent = total === 0 ? 0 : (doned * 100) / total;

    return { total, pending, doned, percent };
  },
});

function TodoListStats() {
  const { total, pending, doned, percent } = useRecoilValue(todoListStatsState);
  const formattedPercent = Math.round(percent);
  return (
    <div>
      <ul>
        <li>Total items: {total}</li>
        <li>Items completed: {doned}</li>
        <li>Items not completed: {pending}</li>
        <li>Percent completed: {formattedPercent}%</li>
      </ul>
    </div>
  );
}
export { TodoListStats };
