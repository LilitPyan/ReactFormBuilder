import React from 'react';
import style from'./Paragraph.module.css';
import {FiEdit} from 'react-icons/fi';
import {MdDelete} from 'react-icons/md';

class Label extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
          <div className={style.paragraph}>
              <label>Paragraph...</label>
              <button className={style.eButton}><FiEdit className={style.icon}/></button>
              <button className={style.dButton}><MdDelete className={style.icon}/></button>
          </div>
        )
    }
}
export default Label;

