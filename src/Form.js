import React from "react";

const Form = (props) => {
  const inputTextHandler = (e) => {
    //console.log(e.target.value)
    props.setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    props.setTodos([
      ...props.todos,
      { text: props.inputText, completed: false, id: Math.random() * 1000 },
    ]);
    //console.log(props.todos)
    props.setInputText("");
  };

  return (
    <form onSubmit={submitTodoHandler}>
      <input
        type="text"
        className="todo-input"
        onChange={inputTextHandler}
        value={props.inputText}
      />
      {/* <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus-square"></i>
      </button> */}
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
