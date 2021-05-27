import "./App.css";
import React, { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  //last function - filter
  //around 01:00:00 and forward

  return (
    <div className="App">
      <h1>Peters Todo list</h1>
      <Form
        setInputText={setInputText}
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
