import React from 'react';
import style from './MultipleChoicePopup.module.css';
import Popup from "reactjs-popup";
import {FiEdit} from "react-icons/all";

class MultipleChoicePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [],
      value:{},
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

  handleChange = (ev) => {
    this.setState({});
  };

  render() {
    const { value, values, open }=this.state;
    return (
      <div className="popup">
        <button className={style.eButton} onClick={this.openModal}>
          <FiEdit className={style.icon} onClick={this.edit}/>
        </button>
        <Popup open={open} closeOnDocumentClick onClose={this.closeModal}>
          <div className={style.text_zone}>
            <textarea className={style.textarea} onChange={this.handleChange}/>
            <button className="close_btn" onClick={this.closeModal}>Close</button>
          </div>
        </Popup>
      </div>
    )
  }
}
export default MultipleChoicePopup;

