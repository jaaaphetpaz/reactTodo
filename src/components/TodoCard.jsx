import React from "react";

export default function TodoCard(props) {
  const { todo, todoIndex, handleDeleteTodo, index } = props;

  return (
    <li className="todoItem" key={todoIndex}>
      <div className="actionsContainer">
        {todo}
        <button>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(index);
          }}
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}
