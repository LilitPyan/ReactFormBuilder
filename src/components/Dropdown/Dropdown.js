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
      isVisible: false,
      options: [],
      option: {value: ''}
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

  handleChangeValue = (ev) => {
    let n = ev.target.value;
    this.setState({

    })
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
        className={style.dropdown}
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
          <select className={style.select}>
            {this.state.options.map((option) => {
              return (
                <option name={option.name}>
                  {option.value}
                </option>
              )
            })}
          </select>
        ) : (
          <div className={style.edit_area}>
            <input
              className={style.text_area}
              placeholder='Dropdown option'
              onChange={this.handleChangeValue}
              value={this.state.option.value}
              name='value'
            />
          </div>
        )}
      </div>
    )
  }
}

export default Dropdown;


