import React from "react";
import TodoList from "./components/TodoList";
import "./App.scss";

const App = () => {
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
};

export default App;
