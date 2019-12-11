import React from 'react';
import {MdDelete} from 'react-icons/md';
import LabelPopup from "../../Editable components/LabelPopup/LabelPopup";

import style from './Label.module.css';

class Label extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labelName: 'Label...'
    }
  };

  dataCallback = (labelInfo) => {
    this.setState({labelName: labelInfo},
      () =>  this.props.data.unshift(labelInfo))
  };

  delete = () => {
    this.props.dataCall(this.props.id);
  };

  render() {
    const {labelName} = this.state;

    return (
      <div className={style.item_container}>
        <div className={style.buttons}>
          <LabelPopup callbackFromParent={this.dataCallback}/>
          <button className={style.dButton}>
            <MdDelete
              className={style.icon}
              onClick={this.delete}
            />
          </button>
        </div>
        <div className={style.title}>
          <h4>
            {labelName}
          </h4>
        </div>
      </div>
    )
  }
}

export default Label;
