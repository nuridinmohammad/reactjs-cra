import React, { useState, useRef, useEffect } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <form className="todo-form" onSubmit={handleSubmit}>
        {props.edit ? (
          <>
            <input
              type="text"
              name="todo"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Update Your item.."
              className="todo-input"
              ref={inputRef}
            />
            <button className="todo-button update">Update</button>
          </>
        ) : (
          <>
            <input
              type="text"
              name="todo"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add a todo.."
              className="todo-input"
              ref={inputRef}
            />
            <button className="todo-buton">Add</button>
          </>
        )}
      </form>
    </>
  );
}

export default TodoForm;
