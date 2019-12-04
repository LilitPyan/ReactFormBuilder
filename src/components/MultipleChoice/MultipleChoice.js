import React from 'react';
import style from './MultipleChoice.module.css';
import {FiEdit} from 'react-icons/fi';
import {MdDelete} from 'react-icons/md';

class MultipleChoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDeleting: false,
      isEditing: false,
      isVisible: false,
      values: [
        {value: 'Radio 1'},
        {value: 'Radio 2'},
        {value: 'Radio 3'}
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
    this.setState({
      values:[{...this.state.values},{value: ev.target.value}]
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
        className={style.multiple_choice}
        onMouseOver={this.mouseOver}
        onMouseLeave={this.mouseLeave}
      >
        {!this.state.isEditing ? (
          <form className={style.form}>
            <label className={style.title}>Multiple choice..</label><br/>
            {this.state.values.map((checkbox) => {
              return (
                <label className={style.label}>
                  <input type='radio' disabled/>
                  {checkbox.value}
                </label>
              )
            })}
            <br/>
          </form>
        ) : (
          <div>
            {this.state.values.map((checkbox) => {
              return (
                <textarea
                  className={style.box}
                  onChange={this.handleChange}
                  value={this.state.value}
                >
                 {checkbox.value}
                </textarea>
              )
            })}
          </div>
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
export default MultipleChoice;

