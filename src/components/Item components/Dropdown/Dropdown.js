import React from 'react';
import {MdDelete} from 'react-icons/md';
import DropdownPopup from "../../Editable components/DropdownPopup/DropdownPopup";

import style from './Dropdown.module.css';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {text:'Choice one'},
        {text:'Choice two'},
        {text: 'Choice three'}
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
          <DropdownPopup  callbackFromParent={this.dataCallback}/>
          <button className={style.dButton}>
            <MdDelete className={style.icon} onClick={this.delete}/>
          </button>
        </div>
        <div>
          <h4 className={style.title}>Dropdown...</h4>
            <select className={style.select}>
              {this.state.items.map(item => (
                <option disabled>{item.text}</option>
              ))}
            </select>
        </div>
      </div>
    )
  }
}
export default Dropdown;


