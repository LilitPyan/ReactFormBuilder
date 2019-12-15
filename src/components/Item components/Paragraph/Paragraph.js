import React from 'react';
import {MdDelete} from 'react-icons/md';
import ParagraphPopup from "../../Editable components/ParagraphPopup/ParagraphPopup";

import style from './Paragraph.module.css';

class Paragraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paragraphName: 'Paragraph...'
    }
  }

  dataCallback = (paragraphInfo) => {
    this.setState({ paragraphName: paragraphInfo },
      () => this.props.data.unshift(paragraphInfo));
  };

  delete = () => {
    this.props.dataCallId(this.props.id);
  };

  render() {
    const { paragraphName } = this.state;

    return (
      <div className={style.item_container}>
        <div className={style.buttons}>
          <ParagraphPopup
            callbackFromParent={this.dataCallback}
          />
          <button className={style.dButton}>
            <MdDelete
              className={style.icon}
              onClick={this.delete}
            />
          </button>
        </div>
        <div className={style.title}>
          <h5>
            {paragraphName}
          </h5>
        </div>
      </div>
    )
  }
}

export default Paragraph;
