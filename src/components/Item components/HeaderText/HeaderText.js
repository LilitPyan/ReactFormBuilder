import './HeaderText.module.css';
import React from 'react';
import {MdDelete} from 'react-icons/md';
import HeaderTextPopup from "../../Editable components/HeaderTextPopup/HeaderTextPopup";

import style from './HeaderText.module.css';

class HeaderText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listDataFromChild: 'Header text...'
    }
  }

  myCallback = (listInfo) => {
    this.setState({
      listDataFromChild: listInfo
    });
  };

  render() {
    const {listDataFromChild} = this.state;

    return (
      <div className={style.item_container}>
        <div className={style.buttons}>
          <HeaderTextPopup callbackFromParent={this.myCallback}/>
          <button className={style.dButton}>
            <MdDelete className={style.icon}/>
          </button>
        </div>
        <div className={style.title}>
          <h4>
            {listDataFromChild}
          </h4>
        </div>
      </div>
    )
  }
}

export default HeaderText;
