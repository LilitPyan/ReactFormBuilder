import React from 'react';
import Popup from "reactjs-popup";
import style from './jsonFormat.module.css'
import FormItems from "./FormItems";

class JsonFormat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,

    }
  }

  openModal = () => {
    this.setState({
      open: true
    })
  };

  closeModal = (ev) => {
    this.setState({open: false});
  };


  render() {
    const {open} = this.state;
    const data = this.props.dropItems;

    return (
      <div className={style.popup}>
        <button
          className={style.eButton}
          onClick={this.openModal}
        >
          Convert to JSON
        </button>
        <Popup
          open={open}
          onClose={this.closeModal}
        >
          <div className={style.modal}>
            <form>
              {data.map(item => <FormItems key={item.id} id={item.id} data={item.data}/>)}
            </form>
          </div>
        </Popup>
      </div>
    )
  }
}

export default JsonFormat;
