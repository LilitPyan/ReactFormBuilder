import React from 'react';
import style from './Checkbox.module.css';
import {MdDelete} from 'react-icons/md';
import CheckboxPopup from "../../Editable components/CheckboxPopUp/CheckboxPopup";

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className={style.item_container}>
        <div className={style.buttons}>
          <CheckboxPopup />
          <button className={style.dButton}>
            <MdDelete className={style.icon} onClick={this.deleted}/>
          </button>
        </div>
        <form className={style.form}>
          <h4 className={style.title}>Checkbox...</h4>
          <p>Place holder option 1</p>
          <input type='checkbox' disabled/>
          <p>Place holder option 2</p>
          <input type='checkbox' disabled/>
          <p>Place holder option 3</p>
          <input type='checkbox' disabled/>
        </form>
      </div>
    )
  }
}

export default Checkbox;

