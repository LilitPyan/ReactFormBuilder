import React from 'react';
import {MdDelete} from 'react-icons/md';
import NumberInputPopup from "../../Editable components/NumberInputPopup/NumberInput";

import style from './NumberInput.module.css';

class NumberInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listDataFromChild: 'Number input...'
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
          <NumberInputPopup callbackFromParent={this.myCallback}/>
          <button className={style.dButton}>
            <MdDelete className={style.icon} />
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

export default NumberInput;
