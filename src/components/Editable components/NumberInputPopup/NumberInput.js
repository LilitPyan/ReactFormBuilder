import React from 'react';
import {FiEdit} from 'react-icons/fi';
import Popup from "reactjs-popup";

import style from './NumberInput.module.css';

class NumberInputPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      inputName: 'Number input...'
    };
  }

  openModal = () => {
    this.setState({
      open: true
    })
  };

  closeModal = () => {
    this.setState({ open: false },
      () =>  this.props.callbackFromParent(this.state.inputName));
  };

  handleChange = (ev) => {
    this.setState({
      inputName: ev.target.value
    });
  };

  render() {
    const { inputName, open } = this.state;
    return (
      <div className={style.popup}>
        <button
          className={style.eButton}
          onClick={this.openModal}
        >
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
              value={inputName}
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
