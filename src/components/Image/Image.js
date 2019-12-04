import React from 'react';
import {FiEdit} from 'react-icons/fi';
import {MdDelete} from 'react-icons/md';
import style from './Image.module.css';

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDeleting: false,
            isEditing: false,
            value: ''
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
          <div className={style.image} id='3'>
              {!this.state.isEditing ? (
                <input type='image' className={style.text_area} disabled/>
              ):(
                <textarea
                  className={style.text_area}
                  onChange={this.handleChange}
                  value={this.state.value}
                >
            Paragraph...
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

export default Image;
