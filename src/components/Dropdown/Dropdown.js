import React from 'react';
import style from'./Dropdown.module.css';
import {FiEdit} from 'react-icons/fi';
import {MdDelete} from 'react-icons/md';

class Dropdown extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
          <div className={style.dropdown}>
              <select className={style.select} disabled>
                <option>Dropdown...</option>
              </select>
              <button className={style.eButton}><FiEdit className={style.icon}/></button>
              <button className={style.dButton}><MdDelete className={style.icon}/></button>
          </div>
        )
    }
}
export default Dropdown;


