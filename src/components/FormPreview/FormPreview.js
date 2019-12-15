import React from "react";
import Popup from "reactjs-popup";
import style from './FormPreview.module.css';
import FormItems from "../Form components/FormItems";

class FormPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  openModal = () => {
    this.setState({
      open: true
    })
  };

  closeModal = () => {
    this.setState({
      open: false
    })
  };

  saveFunc=()=>{
    const l=this.props.dropItems;
    const k = JSON.stringify(l);
    console.log(k)
  };

  render() {
    const data = this.props.dropItems;

    return (
      <div className={style.popup}>
        <button className={style.open_btn} onClick={this.openModal}>
          Preview Form
        </button>
        <Popup open={this.state.open} closeOnDocumentClick onClose={this.closeModal}>
          <div className={style.modal}>
            <form>
            {data.map(item => <FormItems key={item.id} id={item.id} data={item.data}/>)}
            </form>
            <div className={style.buttons}>
              <button className={style.save_btn} onClick={this.saveFunc}>
                Save
              </button>

              <button className={style.close_btn} onClick={this.closeModal}>
                Close
              </button>
            </div>
          </div>
        </Popup>
      </div>
    );
  }
}

export default FormPreview;