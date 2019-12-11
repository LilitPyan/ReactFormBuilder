import React from 'react';
import {MdDelete} from 'react-icons/md';
import NumberInputPopup from "../../Editable components/NumberInputPopup/NumberInput";

import style from './NumberInput.module.css';

class NumberInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName: 'Number input...'
    }
  }

  dataCallback = (inputInfo) => {
    this.setState({inputName: inputInfo},
      () => this.props.data.unshift(inputInfo));
  };

  delete = () => {
    this.props.dataCall(this.props.id);
  };

  render() {
    const {inputName} = this.state;

    return (
      <div className={style.item_container}>
        <div className={style.buttons}>
          <NumberInputPopup
            callbackFromParent={this.dataCallback}
          />
          <button className={style.dButton}>
            <MdDelete
              className={style.icon}
              onClick={this.delete}/>
          </button>
        </div>
        <div className={style.title}>
          <h4>
            {inputName}
          </h4>
          <input
            className={style.input}
            disabled
          />
        </div>
      </div>
    )
  }
}

export default NumberInput;
