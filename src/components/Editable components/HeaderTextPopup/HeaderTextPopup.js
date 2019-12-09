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
      data: this.props.value
    }
  }

  openModal = () => {
    this.setState({
      open: true
    })
  };

  closeModal = (ev) => {
    this.setState({
      open: false
    });
  };

  handleChange = (ev) => {
    this.setState({
      data: ev.target.value
    });
  };


  render() {
    const { data, open } = this.state;

    return (
      <div className={style.popup}>
        <button className={style.eButton} onClick={this.openModal}>
          <FiEdit className={style.icon}/>
        </button>
        <Popup open={open} onClose={this.closeModal}>
          <div className={style.modal}>
            <input className={style.textarea} value={data} onChange={this.handleChange}/>
            <button className={style.cButton} onClick={this.closeModal}>
              Close
            </button>
          </div>
        </Popup>
      </div>
    )
  }
}

export default HeaderTextPopup;
