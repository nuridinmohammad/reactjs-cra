import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

class FormInput extends React.Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text !== "") {
      this.props.addTodo(this.state.text);
    }
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={inputForm}>
        <input
          style={input}
          type="text"
          value={this.state.text}
          autoFocus
          onChange={this.handleChange}
        />
        <Button name="Add" variant="primary" action={this.handleSubmit} />
      </form>
    );
  }
}

export default FormInput;

FormInput.propTypes = {
  addTodo: PropTypes.func,
};

const input = {
  width: "90%",
  border: "none",
  height: "25px",
  fontSize: "1.2rem",
  outline: "none",
};

const inputForm = {
  color: "#2da4f8",
  background: "#fff",
  display: "flex",
  alignItems: "center",
  height: "3rem",
  padding: "0 1rem",
  justifyContent: "space-between",
  margin: "0.5rem 0",
};
