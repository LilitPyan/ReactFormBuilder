import './HeaderText.module.css';
import React from 'react';
import {MdDelete} from 'react-icons/md';
import style from './HeaderText.module.css';
import HeaderTextPopup from "../../Editable components/HeaderTextPopup/HeaderTextPopup";

  class HeaderText extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       value:'Header text...'
      }
    }

    render(){
      const value = this.state.value;

      return (
        <div className={style.item_container}>
          <div className={style.buttons}>
            <HeaderTextPopup  value={this.state.value}/>
            <button className={style.dButton}>
              <MdDelete className={style.icon}/>
            </button>
          </div>
          <div className={style.title}>
            <h4>
              {value}
            </h4>
          </div>
        </div>
      )
    }
}

export default HeaderText;
