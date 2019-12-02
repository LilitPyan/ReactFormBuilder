import './HeaderText.module.css';
import React from 'react';
import {FiEdit} from 'react-icons/fi';
import {MdDelete} from 'react-icons/md';
import style from './HeaderText.module.css';

class HeaderText extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className={style.header}>
        <label>Header Text...</label>
        <button className={style.eButton}><FiEdit className={style.icon} /></button>
        <button className={style.dButton}><MdDelete className={style.icon} /></button>
      </div>
    )
  }
}
export default HeaderText;
