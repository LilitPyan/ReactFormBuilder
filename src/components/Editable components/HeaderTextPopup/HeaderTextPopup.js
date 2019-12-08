import './HeaderTextPopup.module.css';
import React from 'react';
import {FiEdit} from 'react-icons/fi';
import {MdDelete} from 'react-icons/md';
import style from './HeaderTextPopup.module.css';
import Popup from "reactjs-popup";

class HeaderTextPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: ''
    }
  }

  openModal = () => {
    this.setState({
      open: true
    })
  };

  closeModal = () => {
    this.setState({
      open: false,
    });
  };

  handleChange = (ev) => {
    this.setState({
      value: ev.target.value
    });
  };


  render() {
    const { value, open } = this.state;
    const data = this.props.value;


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

export default HeaderTextPopup;
