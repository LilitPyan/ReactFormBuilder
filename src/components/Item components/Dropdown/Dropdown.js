import React from 'react';
import style from './Dropdown.module.css';
import {MdDelete} from 'react-icons/md';
import DropdownPopup from "../../Editable components/DropdownPopup/DropdownPopup";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className={style.item_container}>
        <div className={style.buttons}>
          <DropdownPopup />
          <button className={style.dButton}>
            <MdDelete className={style.icon}/>
          </button>
        </div>
        <div className={style.title}>
          <h5>
            Select name...
          </h5>
          <select className={style.select} disabled>
            <option></option>
          </select>
        </div>
      </div>
    )
  }
}

export default Dropdown;


