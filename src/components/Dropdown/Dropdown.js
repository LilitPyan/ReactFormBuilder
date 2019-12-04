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
      options: [
        {name:'a', value:'a'},
        {name:'b', value:'b'},
        {name:'c', value:'c'}
        ],
    }
  }

  handleChange = (ev) => {
    this.setState({
    })
  };


  handleSubmit = () => {
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
          <select className={style.title}>
            {this.state.options.map((option)=>{
              return(
                <option name={option.name}>{option.value}</option>
              )
            })
            }
          </select>
        ) : (
          <div className={style.edit_area}>
            <input
              className={style.drop_title}
              placeholder='Dropdown title'
              onChange={this.handleChange}
              name='value'
            />
            <input
              className={style.text_area}
              placeholder='Dropdown option'
              onChange={this.handleChange}
              name='name'
            />
          </div>
        )}
        <button className={style.eButton}>
          <FiEdit className={style.icon} onClick={this.edit} onSubmit={this.handleSubmit}/>
        </button>
        <button className={style.dButton}>
          <MdDelete className={style.icon} onClick={this.deleted}/>
        </button>
      </div>
    )
  }
}

export default Dropdown;


