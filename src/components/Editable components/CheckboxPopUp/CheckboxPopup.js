import React from 'react';
import Popup from "reactjs-popup";
import {FiEdit, FiPlusCircle, FiMinusCircle} from "react-icons/all";

import style from './CheckboxPopup.module.css';

class CheckboxPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {id: 1, text: 'Check one'},
        {id: 2, text: 'Check two'},
        {id: 3, text: 'Check three'}
      ],
      text: ''
    };
  }

  openModal = () => {
    this.setState({
      open: true
    })
  };

  closeModal = () => {
    this.setState({open: false},
      () => this.props.callbackFromParent(this.state.items));
  };

  handleChange = (e) => {
    this.setState({text: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      text: this.state.text
    };

    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  };

  deleteOption = (id) => {
    const filteredItems = this.state.items.filter(item =>
      item.id !== id
    );
    this.setState({
      items: filteredItems
    })
  };

  render() {
    const {open, items, text} = this.state;
    return (
      <div className={style.popup}>
        <button
          className={style.eButton}
          onClick={this.openModal}
        >
          <FiEdit className={style.icon}/>
        </button>
        <Popup
          open={open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className={style.modal}>
            <form onSubmit={this.handleSubmit} className={style.form}>
              <input
                id="new-item"
                onChange={this.handleChange}
                value={text}
                className={style.add_input}
              />
              <button
                className={style.plus_btn}
                onClick={this.openModal}
              >
                <FiPlusCircle
                  className={style.plus_icon}
                  onClick={this.handleSubmit}
                />
              </button>
              <ul>
                {items.map(item => (
                  <li key={item.text}>
                    <input type='checkbox'/>
                    <p key={item.text}>
                      {item.text}
                    </p>
                    <button className={style.minusBtn}>
                      <FiMinusCircle
                        className={style.minus_icon}
                        onClick={(id) => this.deleteOption(item.id)}
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </form>
            <button
              className={style.cButton}
              onClick={this.closeModal}
            >
              Close
            </button>
          </div>
        </Popup>
      </div>
    )
  }
}

export default CheckboxPopup;

