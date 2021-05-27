import React from "react";
import Form from "./Form";
import Todo from "./Todo";

export default function TodoList(props) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.todos.map((todo) => (
          <Todo
            todo={todo}
            text={todo.text}
            key={todo.id}
            setTodos={props.setTodos}
            todos={props.todos}
          />
        ))}
      </ul>
    </div>
  );
}
