import './HeaderText.module.css';
import React from 'react';
import {MdDelete} from 'react-icons/md';
import HeaderTextPopup from "../../Editable components/HeaderTextPopup/HeaderTextPopup";

import style from './HeaderText.module.css';

class HeaderText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerName:'Header text...'
    };
  }

  dataCallback = (headerInfo) => {
    this.setState({ headerName: headerInfo},
      () => this.props.data.push(headerInfo));
    console.log(this.props.data);

  };





  render() {
    const { headerName } = this.state;

    return (
      <div className={style.item_container}>
        <div className={style.buttons}>
          <HeaderTextPopup
            callbackFromParent={this.dataCallback}
          />
          <button className={style.dButton}>
            <MdDelete
              className={style.icon}
              onClick={this.delete}
            />
          </button>
        </div>
        <div className={style.title}>
          <h4>
            {headerName}
          </h4>
        </div>
      </div>
    )
  }
}

export default HeaderText;
