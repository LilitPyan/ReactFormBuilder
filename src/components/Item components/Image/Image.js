import React from 'react';
import {MdDelete} from 'react-icons/md';
import ImagePopup from "../../Editable components/ImagePopup/ImagePopup";

import style from './Image.module.css';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: ''
    }
  }

  dataCallback = (imageUrl) => {
    this.setState({
      imageUrl: imageUrl
    }, () => this.props.data.unshift(imageUrl));
  };

  delete = () => {
    this.props.dataCall(this.props.id);
  };

  render() {
    const {imageUrl} = this.state;

    return (
      <div className={style.item_container}>
        <div className={style.buttons}>
          <ImagePopup callbackFromParent={this.dataCallback}/>
          <button className={style.dButton}>
            <MdDelete
              className={style.icon}
              onClick={this.delete}
            />
          </button>
        </div>
        <div className={style.title}>
          <input
            className={style.image}
            src={imageUrl}
            placeholder='No image'
            disabled
          />
        </div>
      </div>
    )
  }
}

export default Image;
