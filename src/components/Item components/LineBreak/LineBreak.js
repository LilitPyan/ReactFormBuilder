import React from 'react';
import style from './LineBreak.module.css';
import {MdDelete} from 'react-icons/md';

class LineBreak extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    }
  }

  mouseOver = () => {
    this.setState({
      isVisible: true
    })
  };

  mouseLeave = () => {
    this.setState({
      isVisible: false
    })
  };

  render() {
    return (
      <div
        className={style.linebreak}
        onMouseOver={this.mouseOver}
        onMouseLeave={this.mouseLeave}
      >
        {this.state.isVisible &&
        <>
          <button className={style.dButton}>
            <MdDelete className={style.icon}/>
          </button>
        </>
        }
        <p className={style.line}/>
      </div>
    )
  }
}

export default LineBreak;

