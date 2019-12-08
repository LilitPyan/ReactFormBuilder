import React from 'react';
import style from './CheckboxPopup.module.css';
import Popup from "reactjs-popup";
import {FiEdit, FiPlusCircle,FiMinusCircle} from "react-icons/all";

class CheckboxPopup extends React.Component {
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
    const { value, values, open }=this.state;
    return (
      <div className={style.popup}>
        <button className={style.eButton} onClick={this.openModal}>
          <FiEdit className={style.icon} onClick={this.edit}/>
        </button>
        <Popup open={open} closeOnDocumentClick onClose={this.closeModal}>
          <div className={style.modal}>
            <table>
              <tr>
                <th>Options</th>
                <th>Value</th>
                <th></th>
              </tr>
              <tr>
                <td>
                  <input className={style.option} onChange={this.handleChange}/>
                </td>
                <td>
                  <input className={style.value} onChange={this.handleChange}/>
                </td>
                <td className={style.buttons}>
                  <button className={style.plus_btn} onClick={this.openModal}>
                    <FiPlusCircle className={style.plus_icon}/>
                  </button>
                  <button className={style.minus_btn} onClick={this.openModal}>
                    <FiMinusCircle className={style.minus_icon}/>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <input className={style.option} onChange={this.handleChange}/>
                </td>
                <td>
                  <input className={style.value} onChange={this.handleChange}/>
                </td>
                <td className={style.buttons}>
                  <button className={style.plus_btn} onClick={this.openModal}>
                    <FiPlusCircle  className={style.plus_icon}/>
                  </button>
                  <button className={style.minus_btn} onClick={this.openModal}>
                    <FiMinusCircle className={style.minus_icon}/>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <input className={style.option} onChange={this.handleChange}/>
                </td>
                <td>
                  <input className={style.value} onChange={this.handleChange}/>
                </td>
                <td className={style.buttons}>
                  <button className={style.plus_btn} onClick={this.openModal}>
                    <FiPlusCircle  className={style.plus_icon}/>
                  </button>
                  <button className={style.minus_btn} onClick={this.openModal}>
                    <FiMinusCircle className={style.minus_icon}/>
                  </button>
                </td>
              </tr>
            </table>
            <button className={style.cButton} onClick={this.closeModal}>
              Close
            </button>
          </div>
        </Popup>
      </div>
    )
  }
}

export default CheckboxPopup;

