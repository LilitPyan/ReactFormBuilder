import React from 'react';
import {FiEdit} from 'react-icons/fi';
import {MdDelete} from 'react-icons/md';
import style from './Label.module.css';

class Label extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDeleting: false,
      isEditing: false,
      value: 'Label...'
    }
  }

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
      <div className={style.label} id='2'>
        {!this.state.isEditing ? (
          <label className={style.title}>
            {this.state.value}
          </label>
        ):(
          <textarea
            className={style.text_area}
            onChange={this.handleChange}
            value={this.state.value}
          >
             Label...
            </textarea>
        )}
        <button className={style.eButton}>
          <FiEdit className={style.icon} onClick={this.edit}/>
        </button>
        <button className={style.dButton}>
          <MdDelete className={style.icon} onClick={this.deleted}/>
        </button>
      </div>
    )
  }
}

export default Label;


