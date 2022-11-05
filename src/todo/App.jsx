import React, { Component } from "react";
import "./App.scss";
import EditModal from "./components/EditModal";
import FormInput from "./components/FormInput";
import TodoItem from "./components/TodoItem";
import logo from "./logo.svg";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "reading a book",
      },
      {
        id: 2,
        title: "reading a training",
      },
    ],
    isEdit: false,
    editData: {
      id: "",
      title: "",
    },
  };

  updateData = () => {
    const { id, title } = this.state.editData;
    const newData = { id, title };
    const newTodos = this.state.todos;
    newTodos.splice((id - 1), 1, newData);
    this.setState({
      todos: newTodos,
      isEdit: false,
      editData: {
        id: "",
        title: "",
      },
    });
  };

  changeData = (e) => {
    this.setState({
      editData: {
        ...this.state.editData,
        title: e.target.value,
      },
    });
  };

  openModal = (id, data) => {
    this.setState({
      isEdit: true,
      editData: {
        id,
        title: data,
      },
    });
  };

  closeModal = () => {
    this.setState({
      isEdit: false,
    });
  };

  deleteById = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  addTodo = (data) => {
    const id = this.state.todos.length;
    const newData = {
      id: id + 1,
      title: data,
    };

    this.setState({
      todos: [...this.state.todos, newData],
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h1>Task List</h1>
        </div>
        <div className="input-form">
          <FormInput addTodo={this.addTodo} />
        </div>
        <div className="list">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteById={this.deleteById}
              openModal={this.openModal}
            />
          ))}
        </div>
        <EditModal
          isEdit={this.state.isEdit}
          closeModal={this.closeModal}
          changeData={this.changeData}
          data={this.state.editData}
          updateData={this.updateData}
        />
      </div>
    );
  }
}

export default App;
