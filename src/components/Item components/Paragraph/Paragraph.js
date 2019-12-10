import React from 'react';
import {MdDelete} from 'react-icons/md';
import ParagraphPopup from "../../Editable components/ParagraphPopup/ParagraphPopup";

import style from './Paragraph.module.css';

class Paragraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listDataFromChild: 'Paragraph...'
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
          <ParagraphPopup callbackFromParent={this.myCallback}/>
          <button className={style.dButton}>
            <MdDelete className={style.icon} onClick={this.deleted}/>
          </button>
        </div>
        <div className={style.title}>
          <h5>
            {listDataFromChild}
          </h5>
        </div>
      </div>
    )
  }
}

export default Paragraph;
