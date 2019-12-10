import React from 'react';
import {MdDelete} from 'react-icons/md';
import TextInputPopup from "../../Editable components/TextInputPopup/TextInputPopup";

import style from './TextInput.module.css';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listDataFromChild: 'Text input...'
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
          <TextInputPopup callbackFromParent={this.myCallback}/>
          <button className={style.dButton}>
            <MdDelete className={style.icon} onClick={this.deleted}/>
          </button>
        </div>
        <div className={style.title}>
          <h4>
            {listDataFromChild}
          </h4>
          <input className={style.input} disabled/>
        </div>
      </div>
    )
  }
}

export default TextInput;
