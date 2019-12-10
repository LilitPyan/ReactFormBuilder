import React from 'react';
import {MdDelete} from 'react-icons/md';
import ImagePopup from "../../Editable components/ImagePopup/ImagePopup";

import style from './Image.module.css';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listDataFromChild: 'Header text...'
    }
  }

  myCallback = (listInfo) => {
    this.setState({
      listDataFromChild: listInfo
    });
  };

  render() {
    const {listDataFromChild} = this.state;

    return (
      <div className={style.item_container}>
        <div className={style.buttons}>
          <ImagePopup callbackFromParent={this.myCallback}/>
          <button className={style.dButton}>
            <MdDelete className={style.icon} onClick={this.deleted}/>
          </button>
        </div>
        <div className={style.title}>
          <input className={style.image} src={listDataFromChild} placeholder='No image' disabled/>
        </div>
      </div>
    )
  }
}

export default Image;
