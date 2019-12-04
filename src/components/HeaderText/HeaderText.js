import './HeaderText.module.css';
import React from 'react';
import {FiEdit} from 'react-icons/fi';
import {MdDelete} from 'react-icons/md';
import style from './HeaderText.module.css';

class HeaderText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDeleting: false,
      isEditing: false,
      isVisible: false,
      value: 'Header text...'
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

  handleChange = (ev) => {
    this.setState({
      value: ev.target.value
    });
  };

  edit = (ev) => {
    ev.preventDefault();
    this.setState(prevState => ({
      isEditing: !prevState.isEditing,
    }));
  };

  deleted = (ev) => {
    ev.preventDefault();
    this.setState({
      isDeleting: true
    });
  };

  render() {
    return (
      <div
        className={style.header}
        onMouseOver={this.mouseOver}
        onMouseLeave={this.mouseLeave}
      >
        {!this.state.isEditing ? (
          <h3 className={style.title}>
            {this.state.value}
          </h3>
        ) : (
          <textarea
            className={style.text_area}
            onChange={this.handleChange}
            value={this.state.value}
          >
             Header text...
            </textarea>
        )}
        {this.state.isVisible &&
        <>
          <button className={style.eButton}>
            <FiEdit className={style.icon} onClick={this.edit}/>
          </button>
          <button className={style.dButton}>
            <MdDelete className={style.icon} onClick={this.deleted}/>
          </button>
        </>
        }
      </div>
    )
  }
}

export default HeaderText;
