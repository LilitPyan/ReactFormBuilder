import React from 'react';
import {FiEdit} from 'react-icons/fi';
import {MdDelete} from 'react-icons/md';
import style from './NumberInput.module.css';

class NumberInput extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className={style.number_input}>
        <label>Number Input...</label>
        <input type='number' disabled className={style.input_item}/>
        <button className={style.eButton}><FiEdit className={style.icon} /></button>
        <button className={style.dButton}><MdDelete className={style.icon} /></button>
      </div>
    )
  }
}
export default NumberInput;
