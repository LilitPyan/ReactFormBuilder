import React from 'react';
import {FiEdit} from 'react-icons/fi';
import style from './ImagePopup.module.css';
import Popup from "reactjs-popup";

class ImagePopup extends React.Component {
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
        const { open }=this.state;
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
