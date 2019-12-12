import React from 'react';
import {MdDelete} from 'react-icons/md';
import CheckboxPopup from "../../Editable components/CheckboxPopUp/CheckboxPopup";

import style from './Checkbox.module.css';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {text: 'Check one'},
        {text: 'Check two'},
        {text: 'Check three'}
        ],
      text: ''
    }
  }

  dataCallback = (optionInfo) => {
    this.setState({ items: optionInfo },
      () => this.props.data.push(this.state.items));
    console.log(this.props.data)
  };

  delete = () => {
    this.props.dataCall(this.props.id);
  };

  render() {
    return (
      <div className={style.item_container}>
        <div className={style.buttons}>
          <CheckboxPopup  callbackFromParent={this.dataCallback}/>
          <button className={style.dButton}>
            <MdDelete className={style.icon} onClick={this.delete}/>
          </button>
        </div>
        <div>
          <h4 className={style.title}>Checkbox...</h4>
          <form className={style.form}>
            <ul>
              {this.state.items.map(item => (
                <li key={item.text}>
                  <input type='checkbox' disabled/>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </form>
        </div>
      </div>
    )
  }
}
export default Checkbox;

