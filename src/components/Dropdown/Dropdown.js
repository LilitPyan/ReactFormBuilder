import React from 'react';
import style from './Dropdown.module.css';
import {FiEdit} from 'react-icons/fi';
import {MdDelete} from 'react-icons/md';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDeleting: false,
      isEditing: false,
      value: [],
      visibility:false
      }
  }

  handleChange = (ev) => {
    let ne= ev.target.value;
    this.setState({
      value: [
        ...this.state.value,
        ne
      ],
      visibility: true
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
      <div className={style.dropdown}>
        {!this.state.isEditing ? (
          <select className={style.title} value={this.state.option}>
            <option>{this.state.value[0]}</option>
            <option>{this.state.value[1]}</option>
            <option>{this.state.value[2]}</option>
            <option>{this.state.value[3]}</option>
            <option>{this.state.value[4]}</option>
            <option>{this.state.value[5]}</option>
            <option>{this.state.value[6]}</option>
          </select>
        ) : (
          <textarea
            className={style.text_area}
            onChange={this.handleChange}
            value={this.state.value}
          >
             Header text...
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

export default Dropdown;


