import React from "react";
import style from "./FormItems.module.css"
import ITEMS from "../App/data";


function FormItems({id}) {
  switch (id) {
    case 1:
      return (
        <h4 className={style.form_header}>
          {ITEMS[0].data[0]}
        </h4>
      );
    case 2:
      return (
        <label className={style.form_label}>
          {ITEMS[1].data[0]}
        </label>
      );
    case 3:
      return (
        <p className={style.form_paragraph}>
          {ITEMS[2].data[0]}
        </p>
      );
    case 4:
      return <hr/>;
    case 5:
      return (
        <select className={style.form_select}>
          <option>1</option>
        </select>
      );
    case 6:
      return <input type='checkbox' className={style.form_checkbox}/>;
    case 7:
      return <input type='radio' className={style.form_multipleChoice}/>;
    case 8:
      return (
        <>
          <p> {ITEMS[7].data[0]}</p>
          <input type='text' className={style.form_textInput}/>
        </>
      );
    case 9:
      return(
        <>
          <p> {ITEMS[8].data[0]}</p>
          <input type='number' className={style.form_numberInput}/>
          </>
          );
    case 10:
      return <input type='image' className={style.form_image}/>;
    default:
      return null;
  }
}

export default FormItems;