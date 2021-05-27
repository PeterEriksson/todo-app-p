import React from "react";

const Todo = (props) => {
  const deleteHandler = () => {
    const updatedTodos = props.todos.filter(
      (item) => item.id !== props.todo.id
    );
    props.setTodos(updatedTodos);
  };

  const completeHandler = () => {
    const updatedTodos = props.todos.map((item) => {
      if (item.id === props.todo.id) {
        return {
          ...item,
          completed: !item.completed,
        };
      } else {
        return item;
      }
    });
    props.setTodos(updatedTodos);
  };

  //onClick={() => deleteHandler(props.todo, props.todo.id)}
  return (
    <div className="todo">
      <li className={`todo-item ${props.todo.completed ? "completed" : ""}`}>
        {props.text}
      </li>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
