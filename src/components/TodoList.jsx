import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos, handleDeletTodo } = props;

  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} key={todoIndex} index={todoIndex}></TodoCard>
        );
      })}
    </ul>
  );
}
