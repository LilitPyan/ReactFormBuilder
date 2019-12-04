import React from 'react';
import {FiEdit} from 'react-icons/fi';
import {MdDelete} from 'react-icons/md';
import style from './TextInput.module.css';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDeleting: false,
      isEditing: false,
      value: 'Text input...'
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
      <div className={style.text_input}>
        {!this.state.isEditing ? (
          <div>
          <p className={style.p}>
            {this.state.value}
          </p>
            <input type='text' className={style.text_area} disabled/>
          </div>
        ):(
          <textarea
            className={style.text_a}
            onChange={this.handleChange}
            value={this.state.value}
          >
            Text input...
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

export default TextInput;
