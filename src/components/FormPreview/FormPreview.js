import React from "react";
import Popup from "reactjs-popup";
import './FormPreview.css'
import FormItems from "../Form components/FormItems";

class FormPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  openModal = () => {
    this.setState({
      open: true
    })
  };

  closeModal = () => {
    this.setState({
      open: false
    })
  };

  render() {
    const data = this.props.dropItems;

    return (
      <div className="popup">
        <button className="open_btn" onClick={this.openModal}>
          Preview Form
        </button>
        <Popup open={this.state.open} closeOnDocumentClick onClose={this.closeModal}>
          <div className="modal">
            <form>
            {data.map(item => <FormItems id={item.id}/>)}
            </form>
            <div className="buttons">
              <button className="save_btn">
                Save
              </button>
              <button className="close_btn" onClick={this.closeModal}>
                Close
              </button>
            </div>
          </div>
        </Popup>
      </div>
    );
  }
}

export default FormPreview;