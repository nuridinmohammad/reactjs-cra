import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const TodoItem = ({ todo, deleteById, openModal }) => {
  const delById = (id) => deleteById(id);
  return (
    <div style={todoItem}>
      <p>{todo.title}</p>
      <div>
        <Button
          name="edit"
          variant="success"
          action={() => openModal(todo.id, todo.title)}
        />
        <Button
          name="delete"
          variant="warning"
          action={() => delById(todo.id)}
        />
      </div>
    </div>
  );
};

export default TodoItem;

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteById: PropTypes.func,
};

const todoItem = {
  background: "#2da4f8",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  height: "3rem",
  padding: "0 1rem",
  justifyContent: "space-between",
  margin: "0.5rem 0",
};
