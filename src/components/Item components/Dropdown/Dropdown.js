import React from 'react';
import style from './Dropdown.module.css';
import {MdDelete} from 'react-icons/md';
import DropdownPopup from "../../Editable components/DropdownPopup/DropdownPopup";

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
      <div className={style.item_container}>
        <div className={style.buttons}>
          <DropdownPopup />
          <button className={style.dButton}>
            <MdDelete className={style.icon} onClick={this.deleted}/>
          </button>
        </div>
        <div className={style.title}>
          <h5>
            Select name...
          </h5>
          <select className={style.select} disabled>
            <option></option>
          </select>
        </div>
      </div>
    )
  }
}

export default Dropdown;


