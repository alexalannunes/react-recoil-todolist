import { atom, selector, useRecoilValue } from "recoil";
import { TodoItem } from "./TodoItem";
import { TodoListFilters, todoListFilterState } from "./TodoListFilters";
import { TodoListCreator } from "./TodoListInput";
import { TodoListStats } from "./TodoListStats";

export const todoListState = atom({
  key: "TodoList",
  default: [],
});

export const filteredTodoListState = selector({
  key: "FilteredTodoList",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const todos = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return todos.filter((item) => item.completed);
      case "Show Uncompleted":
        return todos.filter((item) => !item.completed);
      default:
        return todos;
    }
  },
});

function TodoList() {
  const todos = useRecoilValue(filteredTodoListState);
  return (
    <div>
      <TodoListCreator />
      <br />
      <TodoListStats />
      <TodoListFilters />

      <ul>
        {todos.map((e) => (
          <TodoItem key={e.id} {...e} />
        ))}
      </ul>
    </div>
  );
}

export { TodoList };
