import React from 'react';
import Popup from "reactjs-popup";
import {FiEdit, FiPlusCircle, FiMinusCircle} from "react-icons/all";

import style from './CheckboxPopup.module.css';

class CheckboxPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      options:  [
        {id:1, name:'', value:''},
      ],
      option: {
        id:'',
        name: '',
        value: ''
      }
    }
  }

  openModal = () => {
    this.setState({
      open: true
    })
  };

  closeModal = () => {
    const {option}=this.state;
    this.setState({ open: false, options: [...this.state.options, option]},
      () => this.props.callbackFromParent(this.state.options ))
  };

  handleChange = ({ target: { name, value }}) => {
    this.setState({
      option: {
        [name] : value
      }
    })
  };

  addOption = (e) => {
    e.preventDefault();

    const newOption = this.state.option;
    this.setState({
      options: [
        newOption,
        ...this.state.options
      ],
      option: {
        name: '',
        value:'',
        id: ''
      }
    });
  };

  deleteOption = (id) => {
    const filteredOptions = this.state.options.filter(item =>
      item.id !== id
    );
    this.setState({
      options: filteredOptions
    })
  };

  render(){
    const {open, options, option} = this.state;
    console.log(option)


    return (
      <div className={style.popup}>
        <button className={style.eButton} onClick={this.openModal}>
          <FiEdit className={style.icon}/>
        </button>
        <Popup open={open} closeOnDocumentClick onClose={this.closeModal}>
          <div className={style.modal}>
            <table>
              <tr>
                <th>Options</th>
                <th>Value</th>
                <th></th>
              </tr>
              {options.map((option) => {
                return (
                  <tr id={option.id}>
                    <td>
                      <input
                        className={style.option}
                        onChange={this.handleChange}
                      />
                    </td>
                    <td>
                      <input
                        className={style.value}
                        onChange={this.handleChange}
                      />
                    </td>
                    <td className={style.buttons}>
                      <button className={style.plus_btn} onClick={this.openModal}>
                        <FiPlusCircle className={style.plus_icon} onClick={this.addOption}/>
                      </button>
                      <button className={style.minus_btn} onClick={this.openModal}>
                        <FiMinusCircle className={style.minus_icon} onClick={(id) => this.deleteOption(option.id)}/>
                      </button>
                    </td>
                  </tr>
                )
              })}
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

