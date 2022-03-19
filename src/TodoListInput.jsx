import { atom, useRecoilState, useSetRecoilState } from "recoil";
import { todoListState } from "./TodoList";

const todoListCreator = atom({
  key: "todoListCreator",
  default: "",
});

function TodoListCreator() {
  const [text, setText] = useRecoilState(todoListCreator);
  const setTodoList = useSetRecoilState(todoListState);
  const add = () => {
    setTodoList((oldTodoList) => {
      return [
        ...oldTodoList,
        {
          id: Date.now(),
          text,
          completed: false,
        },
      ];
    });
    setText("");
  };
  const change = (e) => setText(e.target.value);
  return (
    <>
      <input value={text} onChange={change} />
      <button onClick={add}>add</button>
    </>
  );
}

export { TodoListCreator };
