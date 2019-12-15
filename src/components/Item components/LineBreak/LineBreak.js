import React from 'react';
import style from './LineBreak.module.css';
import {MdDelete} from 'react-icons/md';

class LineBreak extends React.Component {
  constructor(props) {
    super(props);
  }

  delete = () => {
    this.props.dataCallId(this.props.id);
  };

  render() {
    return (
      <div className={style.linebreak}>
        <button className={style.dButton}>
          <MdDelete
            className={style.icon}
            onClick={this.delete}
          />
        </button>
        <p className={style.line}/>
      </div>
    )
  }
}

export default LineBreak;

