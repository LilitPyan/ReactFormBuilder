import React from 'react';
import style from './MultipleChoicePopup.module.css';
import Popup from "reactjs-popup";
import {FiEdit, FiMinusCircle, FiPlusCircle} from "react-icons/all";

class MultipleChoicePopup extends React.Component {
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
    const {option}=this.state;
    this.setState({open: false, options: [...this.state.options, option] },
      () => this.props.callbackFromParent(this.state.options));
  };


  handleChange = ({target:{name,value}}) => {
    this.setState({
      option: {
        [name]:value,
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
    const { options, open }=this.state;
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
                        onChange={this.handleChange}
                        placeholder={option.name}
                      />
                    </td>
                    <td>
                      <input
                        name='value'
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
export default MultipleChoicePopup;

