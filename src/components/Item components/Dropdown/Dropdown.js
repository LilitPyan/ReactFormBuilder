import React from 'react';
import {MdDelete} from 'react-icons/md';
import DropdownPopup from "../../Editable components/DropdownPopup/DropdownPopup";

import style from './Dropdown.module.css';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options:[]
    }
  }

  dataCallback = (optionInfo) => {
    this.setState({ options: [optionInfo] },
      () => this.props.data.push(optionInfo));
  };

  delete = () => {
    this.props.dataCall(this.props.id);
  };

  render() {
    console.log(this.state.options);

    return (
      <div className={style.item_container}>
        <div className={style.buttons}>
          <DropdownPopup
            callbackFromParent={this.dataCallback}
          />
          <button className={style.dButton}>
            <MdDelete
              className={style.icon}
              onClick={this.delete}
            />
          </button>
        </div>
        <div className={style.title}>
          <h5>
            Select name...
          </h5>
          <select
            className={style.select}
            disabled
          >
            <option></option>
          </select>
        </div>
      </div>
    )
  }
}

export default Dropdown;


