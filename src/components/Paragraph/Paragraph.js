import React from 'react';
import {FiEdit} from 'react-icons/fi';
import {MdDelete} from 'react-icons/md';
import style from './Paragraph.module.css';

class Paragraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDeleting: false,
      isEditing: false,
      isVisible: false,
      value: 'Paragraph...'
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
        className={style.paragraph}
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
          <p className={style.title}>
            {this.state.value}
          </p>
        ):(
          <textarea
            className={style.textarea}
            onChange={this.handleChange}
            value={this.state.value}
          >
            Paragraph...
            </textarea>
        )}
      </div>
    )
  }
}

export default Paragraph;
