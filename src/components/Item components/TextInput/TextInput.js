import React from 'react';
import {MdDelete} from 'react-icons/md';
import TextInputPopup from "../../Editable components/TextInputPopup/TextInputPopup";

import style from './TextInput.module.css';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName: 'Text input...'
    }
  }

  dataCallback = (inputInfo) => {
    this.setState({inputName: inputInfo},
      () => this.props.data.unshift(inputInfo));
  };

  delete = () => {
    this.props.dataCallId(this.props.id);
  };

  render() {
    const {inputName} = this.state;

    return (
      <div className={style.item_container}>
        <div className={style.buttons}>
          <TextInputPopup
            callbackFromParent={this.dataCallback}
          />
          <button className={style.dButton}>
            <MdDelete
              className={style.icon}
              onClick={this.delete}
            />
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

export default TextInput;
