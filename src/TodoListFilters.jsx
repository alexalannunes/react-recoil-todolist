import { atom, useRecoilState } from "recoil";

export const todoListFilterState = atom({
  key: "todoListFilter",
  default: "Show All",
});

export function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const onFilter = ({ target: { value } }) => {
    setFilter(value);
  };
  return (
    <>
      Filter:
      <select onChange={onFilter} value={filter}>
        <option value="Show All">Show All</option>
        <option value="Show Completed">Show Completed</option>
        <option value="Show Uncompleted">Show Uncompleted</option>
      </select>
    </>
  );
}
