import React from 'react';
import style from './MultipleChoice.module.css';
import {MdDelete} from 'react-icons/md';
import MultipleChoicePopup from "../../Editable components/MultipleChoicePopup/MultipleChoicePopup";

class MultipleChoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options:[]
    }
  }

  dataCallback = (optionInfo) => {
    this.setState({ options: [optionInfo] },
      () => this.props.data.unshift(optionInfo));
  };

  delete = () => {
    this.props.dataCall(this.props.id);
  };

  render() {
    return (
      <div className={style.item_container}>
        <div className={style.buttons}>
          <MultipleChoicePopup  callbackFromParent={this.dataCallback}/>
          <button className={style.dButton}>
            <MdDelete className={style.icon} onClick={this.delete}/>
          </button>
        </div>
        <form className={style.form}>
          <h4 className={style.title}>Multiple choice...</h4>
          <ul>
          {this.state.options.map(option => {
            return option.map(option => (
              <li>
              <p>{option.name}</p>
              <input
                type="radio"
                key={option.id}
                value={option.value}
                defaultChecked={false}
              disabled
              />
              </li>
            ))
          })}
          </ul>
        </form>
      </div>
    )
  }
}
export default MultipleChoice;

