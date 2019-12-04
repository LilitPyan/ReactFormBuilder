import React from 'react';
import style from './Checkbox.module.css';
import {FiEdit} from 'react-icons/fi';
import {MdDelete} from 'react-icons/md';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDeleting: false,
      isEditing: false,
      isVisible: false,
      values: [
        {value: 'Option 1'},
        {value: 'Option 2'},
        {value: 'Option 3'}
      ]
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
    this.setState({});
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
        className={style.checkbox}
        onMouseOver={this.mouseOver}
        onMouseLeave={this.mouseLeave}
      >
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
        {!this.state.isEditing ? (
          <form className={style.form}>
            <label className={style.title}>
              Checkbox...
            </label>
            <br/>
            {this.state.values.map((checkbox) => {
              return (
                <label className={style.label}>
                  <input type='checkbox' disabled/>
                  {checkbox.value}
                </label>
              )
            })}
            <br/>
          </form>
        ) : (
          <div className={style.text_zone}>
            {this.state.values.map((checkbox) => {
              return (
                <textarea
                  className={style.textarea}
                  onChange={this.handleChange}
                  value={this.state.value}
                >
                 {checkbox.value}
                </textarea>
              )
            })}
          </div>
        )}
      </div>
    )
  }
}

export default Checkbox;

