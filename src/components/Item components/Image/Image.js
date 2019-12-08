import React from 'react';
import {MdDelete} from 'react-icons/md';
import style from './Image.module.css';
import ImagePopup from "../../Editable components/ImagePopup/ImagePopup";

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
          <div className={style.item_container}>
              <div className={style.buttons}>
                  <ImagePopup />
                  <button className={style.dButton}>
                      <MdDelete className={style.icon} onClick={this.deleted}/>
                  </button>
              </div>
              <div className={style.title}>
                  <input className={style.image}  placeholder='No image' disabled/>
              </div>
          </div>
        )
    }
}

export default Image;
