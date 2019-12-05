import './HeaderText.module.css';
import React from 'react';
import {MdDelete} from 'react-icons/md';
import style from './HeaderText.module.css';
import HeaderTextPopup from "../../Editable components/HeaderTextPopup/HeaderTextPopup";

class HeaderText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className={style.item_container}>
        <div className={style.buttons}>
          <HeaderTextPopup />
          <button className={style.dButton}>
            <MdDelete className={style.icon} onClick={this.deleted}/>
          </button>
        </div>
        <div className={style.title}>
          <h4>
            Header text...
          </h4>
        </div>
      </div>
    )
  }
}

export default HeaderText;
