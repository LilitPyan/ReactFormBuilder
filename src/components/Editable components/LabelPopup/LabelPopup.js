import React from 'react';
import {FiEdit} from 'react-icons/fi';
import Popup from "reactjs-popup";

import style from './LabelPopup.module.css';

class LabelPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      labelName: 'Label...'
    };
  }

  openModal = () => {
    this.setState({
      open: true
    })
  };

  closeModal = () => {
    this.setState({open: false},
      () => this.props.callbackFromParent(this.state.labelName));
  };

  handleChange = (ev) => {
    this.setState({
      labelName: ev.target.value
    });
  };

  render() {
    const {open, labelName} = this.state;

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
              value={labelName}
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

export default LabelPopup;