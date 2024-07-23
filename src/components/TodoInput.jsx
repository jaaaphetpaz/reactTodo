import { useState } from "react";

export default function TodoInput(props) {
  const { handleAddTodo } = props;
  const [todoValue, setTodoValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTodo(todoValue);
      setTodoValue("");
    }
  };

  return (
    <header>
      <input
        value={todoValue}
        placeholder="Enter todo..."
        type="text"
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={() => {
          handleAddTodo(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
