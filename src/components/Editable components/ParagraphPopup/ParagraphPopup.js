import React from 'react';
import {FiEdit} from 'react-icons/fi';
import Popup from "reactjs-popup";

import style from './ParagraphPopup.module.css';

class ParagraphPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      paragraphName: 'Paragraph...'
    }
  }

  openModal = () => {
    this.setState({
      open: true
    })
  };

  closeModal = (ev) => {
    this.setState({open: false},
      () => this.props.callbackFromParent(this.state.paragraphName));
  };

  handleChange = (ev) => {
    this.setState({
      paragraphName: ev.target.value
    });
  };

  render() {
    const {paragraphName, open} = this.state;

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
              value={paragraphName}
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

export default ParagraphPopup;
