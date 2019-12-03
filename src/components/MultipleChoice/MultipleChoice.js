import React from 'react';
import style from'./MultipleChoice.module.css';
import {FiEdit} from 'react-icons/fi';
import {MdDelete} from 'react-icons/md';

class MultipleChoice extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
          <div className={style.multiple_choice}>
              <form className={style.form}>
                  <label className={style.title}>Checkbox...</label><br/>
                  <label className={style.label}>
                      <input type='radio' disabled/>
                      Place holder option 1
                  </label><br/>
                  <label className={style.label}>
                      <input type='radio' disabled/>
                      Place holder option 2
                  </label><br/>
                  <label className={style.label}>
                      <input type='radio' disabled/>
                      Place holder option 3
                  </label>
              </form>
              <button className={style.eButton}><FiEdit className={style.icon}/></button>
              <button className={style.dButton}><MdDelete className={style.icon}/></button>
          </div>
        )
    }
}
export default MultipleChoice;

