import React from 'react';
import {FiEdit} from 'react-icons/fi';
import style from './NumberInput.module.css';
import Popup from "reactjs-popup";

class NumberInputPopup extends React.Component {
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
      <div className={style.popup}>
        <button className={style.eButton} onClick={this.openModal}>
          <FiEdit className={style.icon}/>
        </button>
        <Popup
          open={open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className={style.modal}>
            <input
              className={style.textarea}
              value={value}
              onChange={this.handleChange}
            />
            <button
              className={style.cButton}
              onClick={this.closeModal}
            >
              Close
            </button>
          </div>
        </Popup>
      </div>

    )
  }
}
export default NumberInputPopup;
