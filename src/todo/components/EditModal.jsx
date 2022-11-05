import React from "react";
import Button from "./Button";

class EditModal extends React.Component {
  render() {
    if (this.props.isEdit) {
      return (
        <div className="modal-container">
          <div className="modal-box">
            <h3>Edit Todo</h3>
            <div className="input">
              <input
                type="text"
                autoFocus
                value={this.props.data.title}
                onChange={this.props.changeData}
              />
            </div>
            <div className="btn-group">
              <Button
                name="Cancel"
                variant="warning"
                action={this.props.closeModal}
              />
              <Button
                name="Update"
                variant="primary"
                action={this.props.updateData}
              />
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default EditModal;
