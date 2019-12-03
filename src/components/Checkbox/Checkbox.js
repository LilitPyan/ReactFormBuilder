import React from 'react';
import style from'./Checkbox.module.css';
import {FiEdit} from 'react-icons/fi';
import {MdDelete} from 'react-icons/md';

class Checkbox extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
          <div className={style.checkbox}>
              <form className={style.form}>
                  <label className={style.title}>Checkbox...</label><br/>
                  <label className={style.label}>
                      <input type='checkbox' disabled/>
                      Place holder option 1
                  </label><br/>
                  <label className={style.label}>
                      <input type='checkbox' disabled/>
                      Place holder option 2
                  </label><br/>
                  <label className={style.label}>
                      <input type='checkbox' disabled/>
                      Place holder option 3
                  </label>
              </form>
              <button className={style.eButton}><FiEdit className={style.icon}/></button>
              <button className={style.dButton}><MdDelete className={style.icon}/></button>
          </div>
        )
    }
}
export default Checkbox;

