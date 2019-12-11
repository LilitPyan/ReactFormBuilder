import React from 'react';
import {FiEdit} from 'react-icons/fi';
import Popup from "reactjs-popup";

import style from './ImagePopup.module.css';

class ImagePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      url: ''
    }
  };

  openModal = () => {
    this.setState({
      open: true
    })
  };

  closeModal = () => {
    this.setState({open: false},
      () => this.props.callbackFromParent(this.state.imageUrl));
  };

  handleChange = (ev) => {
    this.setState({
      url: ev.target.value
    });
  };

  render() {
    const {url, open} = this.state;

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
          onClose={this.closeModal}
        >
          <div className={style.modal}>
            <input
              className={style.textarea}
              value={url}
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

export default ImagePopup;
