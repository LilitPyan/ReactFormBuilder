import React from "react";
import style from "./FormItems.module.css"

function FormItems({ id }) {
  switch (id) {
    case 1:
      return (
        <h4 className={style.form_header}>
          header
        </h4>
      );
    case 2:
      return (
        <label className={style.form_label}>
          label
        </label>
      );
    case 3:
      return (
        <p className={style.form_paragraph}>
          paragraph
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
      return <input type='text' className={style.form_textInput}/>;
    case 9:
      return <input type='number' className={style.form_numberInput}/>;
    case 10:
      return <input type='image' className={style.form_image}/>;
    default:
      return null;
  }
}

export default FormItems;