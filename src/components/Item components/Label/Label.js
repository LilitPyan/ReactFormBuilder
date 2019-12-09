import React from 'react';
import {MdDelete} from 'react-icons/md';
import LabelPopup from "../../Editable components/LabelPopup/LabelPopup";

import style from './Label.module.css';

class Label extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listDataFromChild: 'Label...'
    }
  };

  myCallback = (listInfo) => {
    this.setState({
      listDataFromChild: listInfo
    })
  };

  render() {
    const {listDataFromChild} = this.state;

    return (
      <div className={style.item_container}>
        <div className={style.buttons}>
          <LabelPopup callbackFromParent={this.myCallback}/>
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

export default Label;
