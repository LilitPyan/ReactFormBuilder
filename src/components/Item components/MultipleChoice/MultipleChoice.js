import React from 'react';
import style from './MultipleChoice.module.css';
import {MdDelete} from 'react-icons/md';
import MultipleChoicePopup from "../../Editable components/MultipleChoicePopup/MultipleChoicePopup";

class MultipleChoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className={style.item_container}>
        <div className={style.buttons}>
          <MultipleChoicePopup />
          <button className={style.dButton}>
            <MdDelete className={style.icon} onClick={this.deleted}/>
          </button>
        </div>
        <form className={style.form}>
          <h4 className={style.title}>Multiple choice...</h4>
          <p>Place holder option 1</p>
          <input type='radio' disabled/>
          <p>Place holder option 2</p>
          <input type='radio' disabled/>
          <p>Place holder option 3</p>
          <input type='radio' disabled/>
        </form>
      </div>
    )
  }
}
export default MultipleChoice;

