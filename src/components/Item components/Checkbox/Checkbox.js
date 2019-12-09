import React from 'react';
import {MdDelete} from 'react-icons/md';
import CheckboxPopup from "../../Editable components/CheckboxPopUp/CheckboxPopup";

import style from './Checkbox.module.css';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listDataFromChild: [
        {id:1, name: 'Place holder option 1', value: 'option 1'},
        {id:2, name: 'Place holder option 2', value: 'option 2'},
        {id:3, name: 'Place holder option 3', value: 'option 3'}
      ]
    }
  };

  myCallback = (listInfo) => {
    this.setState({listDataFromChild: listInfo});
  };

  render() {
    const {listDataFromChild} = this.state;

    return (
      <div className={style.item_container}>
        <div className={style.buttons}>
          <CheckboxPopup callbackFromParent={this.myCallback}/>
          <button className={style.dButton}>
            <MdDelete className={style.icon} onClick={this.deleted}/>
          </button>
        </div>
        <form className={style.form}>
          <h4 className={style.title}>Checkbox...</h4>
          {listDataFromChild.map((item, i) => {
            return (
              <div id={item.id}>
                <p>{item.name}</p>
                <input type='checkbox' value={item.value} disabled/>
              </div>
            )
          })}
        </form>
      </div>
    )
  }
}

export default Checkbox

