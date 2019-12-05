import React from 'react';
import {MdDelete} from 'react-icons/md';
import style from './Paragraph.module.css';
import ParagraphPopup from "../../Editable components/ParagraphPopup/ParagraphPopup";

class Paragraph extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }

    render() {
      return (
        <div className={style.item_container}>
          <div className={style.buttons}>
            <ParagraphPopup />
            <button className={style.dButton}>
              <MdDelete className={style.icon} onClick={this.deleted}/>
            </button>
          </div>
          <div className={style.title}>
            <h4>
              Paragraph...
            </h4>
          </div>
        </div>
      )
  }
}

export default Paragraph;
