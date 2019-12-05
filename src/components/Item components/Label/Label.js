import React from 'react';
import {MdDelete} from 'react-icons/md';
import style from './Label.module.css';
import LabelPopup from "../../Editable components/LabelPopup/LabelPopup";

class Label extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className={style.item_container}>
        <div className={style.buttons}>
          <LabelPopup />
          <button className={style.dButton}>
            <MdDelete className={style.icon} onClick={this.deleted}/>
          </button>
        </div>
        <div className={style.title}>
          <h4>
            Label...
          </h4>
        </div>
      </div>
    )
  }
}

export default Label;
