import React from 'react';
import style from'./LineBreak.module.css';
import {MdDelete} from 'react-icons/md';

class LineBreak extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
          <div className={style.linebreak}>
              <p className={style.line}/>
              <button className={style.dButton}><MdDelete className={style.icon}/></button>
          </div>
        )
    }
}
export default LineBreak;

