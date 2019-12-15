import React from 'react';
import style from './MultipleChoice.module.css';
import {MdDelete} from 'react-icons/md';
import MultipleChoicePopup from "../../Editable components/MultipleChoicePopup/MultipleChoicePopup";

class MultipleChoice extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        items: [
          {text: 'Choice one'},
          {text: 'Choice two'},
          {text: 'Choice three'}
          ],
        text: ''
      };
  }

  dataCallback = (optionInfo) => {

    this.state.items = optionInfo => [...new Set(optionInfo)];
    console.log(this.state.items);
    this.setState({ items: optionInfo },
      () => this.props.data.push(this.state.items));
  };

  delete = () => {
    this.props.dataCallId(this.props.id);
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
          <div>
            <h4 className={style.title}>Multiple choice...</h4>
            <form className={style.form}>
              <ul>
                {this.state.items.map(item => (
                  <li key={item.text}>
                  <input type='radio' disabled/>
                  <p>{item.text}</p>
                  </li>
                ))}
              </ul>
            </form>
          </div>
      </div>
    )
  }
}
export default MultipleChoice;

