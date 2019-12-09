import './HeaderTextPopup.module.css';
import React from 'react';
import {FiEdit} from 'react-icons/fi';
import style from './HeaderTextPopup.module.css';
import Popup from "reactjs-popup";

class HeaderTextPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      textD: 'Header text...'
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
    const listInfo = this.state.textD;
    this.props.callbackFromParent(listInfo);
    };

  handleChange = (ev) => {
    this.setState({
      textD: ev.target.value
    });
  };



  render() {
    const {textD, open } = this.state;
    console.log(textD);

    return (
      <div className={style.popup}>
        <button className={style.eButton} onClick={this.openModal}>
          <FiEdit className={style.icon}/>
        </button>
        <Popup open={open} onClose={this.closeModal}>
          <div className={style.modal}>
            <input className={style.textarea} value={textD} onChange={this.handleChange}/>
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
