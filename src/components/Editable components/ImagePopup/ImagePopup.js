import React from 'react';
import {FiEdit} from 'react-icons/fi';
import Popup from "reactjs-popup";

import style from './ImagePopup.module.css';

class ImagePopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            text: ''
        }
    };

    openModal = () => {
        this.setState({
            open: true
        })
    };

    closeModal = (ev) => {
        this.setState({
            open: false
        });
        const listInfo = this.state.text;
        this.props.callbackFromParent(listInfo);
    };

    handleChange = (ev) => {
        this.setState({
            text: ev.target.value
        });
    };

    render() {
        const { text, open } = this.state;

        return (
          <div className={style.popup}>
              <button className={style.eButton} onClick={this.openModal}>
                  <FiEdit className={style.icon}/>
              </button>
              <Popup open={open} closeOnDocumentClick onClose={this.closeModal}>
                  <div className={style.modal}>
                      <input className={style.textarea} value={text} onChange={this.handleChange}/>
                      <button className={style.cButton} onClick={this.closeModal}>
                          Close
                      </button>
                  </div>
              </Popup>
          </div>
        )
    }
}
export default ImagePopup;
