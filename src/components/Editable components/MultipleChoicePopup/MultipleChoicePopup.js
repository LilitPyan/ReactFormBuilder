import React from 'react';
import style from './MultipleChoicePopup.module.css';
import Popup from "reactjs-popup";
import {FiEdit, FiMinusCircle, FiPlusCircle} from "react-icons/all";

class MultipleChoicePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {id: 1, text: 'Choice one'},
        {id: 2, text: 'Choice two'},
        {id: 3, text: 'Choice three'}
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
                      onClick={this.addOption}
                    />
                  </button>
              <ul>
                {items.map(item => (
                  <li key={item.text}>
                    <input type='radio'/>
                    <p key={item.text}>
                      {item.text}
                    </p>
                    <button className={style.minus_btn}>
                      <FiMinusCircle
                        className={style.minus_icon}
                        onClick={(id) => this.deleteOption(item.id)}
                      />
                    </button>
                  </li>
                ))}
                  </ul>
            </form>
          </div>
        </Popup>
      </div>
    )
  }
}

export default MultipleChoicePopup;

