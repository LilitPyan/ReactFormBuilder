import React from 'react';
import {FiEdit} from 'react-icons/fi';
import {MdDelete} from 'react-icons/md';
import style from './TextInput.module.css';

class TextInput extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className={style.text_input}>
        <label>Text Input...</label>
        <input type='text' disabled className={style.input_item}/>
        <button className={style.eButton}><FiEdit className={style.icon} /></button>
        <button className={style.dButton}><MdDelete className={style.icon} /></button>
      </div>
    )
  }
}
export default TextInput;
