import React from 'react';
import { FiEdit, FiPlusCircle, FiMinusCircle} from 'react-icons/fi';
import style from './DropdownPopup.module.css';
import Popup from "reactjs-popup";

class DropdownPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [],
      value: {},
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
    const {value, values, open} = this.state;
    return (
      <div className={style.popup}>
        <button className={style.eButton} onClick={this.openModal}>
          <FiEdit className={style.icon} onClick={this.edit}/>
        </button>
        <Popup open={open} closeOnDocumentClick onClose={this.closeModal}>
          <div className={style.modal}>

            <label>Options</label>
            <input className={style.option} onChange={this.handleChange}/>
            <input className={style.option} onChange={this.handleChange}/>
            <input className={style.option} onChange={this.handleChange}/>

            <label>Values</label>
            <input className={style.value} onChange={this.handleChange}/>
            <input className={style.value} onChange={this.handleChange}/>
            <input className={style.value} onChange={this.handleChange}/>

            <button className={style.eButton} onClick={this.openModal}>
              <FiPlusCircle className={style.icon}/>
            </button>
            <button className={style.eButton} onClick={this.openModal}>
              <FiMinusCircle className={style.icon}/>
            </button>


            <button className={style.cButton} onClick={this.closeModal}>
              Close
            </button>
          </div>
        </Popup>
      </div>

    )
  }
}

export default DropdownPopup;