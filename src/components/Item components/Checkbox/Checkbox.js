import React from 'react';
import {MdDelete} from 'react-icons/md';
import CheckboxPopup from "../../Editable components/CheckboxPopUp/CheckboxPopup";

import style from './Checkbox.module.css';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    }
  };

  dataCallback = (optionInfo) => {
    this.setState({options: optionInfo},
      () => this.props.data.unshift(optionInfo));
  };

  delete = () => {
    this.props.dataCall(this.props.id);
  };

  render() {
    const {options} = this.state;

    return (
      <div className={style.item_container}>
        <div className={style.buttons}>
          <CheckboxPopup callbackFromParent={this.dataCallback}/>
          <button className={style.dButton}>
            <MdDelete className={style.icon} onClick={this.delete}/>
          </button>
        </div>
        <form className={style.form}>
          <h4 className={style.title}>Checkbox...</h4>
          {options.map(( item ) => {
            return (
              <div id={item.id}>
                <p>{item.name}</p>
                <input type='checkbox' value={item.value} disabled/>
              </div>
            )
          })}
        </form>
      </div>
    )
  }
}

export default Checkbox

