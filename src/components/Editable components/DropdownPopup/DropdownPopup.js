import React from 'react';
import {FiEdit, FiPlusCircle, FiMinusCircle} from 'react-icons/fi';
import style from './DropdownPopup.module.css';
import Popup from "reactjs-popup";

class DropdownPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      options: [
        {name:'Place holder option 1', id:1},
        {name:'Place holder option 2', id:2},
        {name:'Place holder option 3', id:3}
      ],
      option: {
        name:'',
        value:'',
        id:''
      }
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

  handleChange = ({target:{name,value}}) => {
    this.setState({
      option: {
        [name]:value,
        id: Date.now()
      }
    })
  };

  addOption= (e) => {
    e.preventDefault();

    const newOption = this.state.option;
    this.setState({
      options: [ newOption, ...this.state.options],
      option: {
        text: '',
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
    const {open, options} = this.state;
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
              {options.map((option)=>{
                return(
                  <tr id={option.id}>
                    <td>
                      <input
                        className={style.option}
                        name='name'
                        value={option.name}
                        onChange={this.handleChange}
                        placeholder={option.name}
                      />
                    </td>
                    <td>
                      <input
                        name='value'
                        value={option.value}
                        className={style.value}
                        onChange={this.handleChange}
                      />
                    </td>
                    <td className={style.buttons}>
                      <button className={style.plus_btn} onClick={this.openModal}>
                        <FiPlusCircle
                          className={style.plus_icon}
                          onClick={this.addOption}
                        />
                      </button>
                      <button className={style.minus_btn} onClick={this.openModal}>
                        <FiMinusCircle
                          className={style.minus_icon}
                          onClick={(id)=>this.deleteOption(option.id)}
                        />
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

export default DropdownPopup;