import React from "react";
import style from "./FormItems.module.css"

function FormItems({id, data}) {
  switch (id) {
    case 1:
      return (
        <h4 className={style.form_header}>
          {data[0]}
        </h4>
      );
    case 2:
      return (
        <label className={style.form_label}>
          {data[0]}
        </label>
      );
    case 3:
      return (
        <p className={style.form_paragraph}>
          {data[0]}
        </p>
      );
    case 4:
      return <hr/>;
    case 5:
      return (
        <select className={style.form_select}>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      );
    case 6:
      return (
        <form className={style.form_box}>
          <label className={style.form_box_label}>
            <input type='checkbox'/>
            <p>Check 1</p>
          </label>
          <label className={style.form_box_label}>
            <input type='checkbox'/>
            <p>Check 2</p>
          </label>
          <label className={style.form_box_label}>
            <input type='checkbox'/>
            <p>Check 3</p>
          </label>
        </form>
      );
    case 7:
      return (
        <form className={style.form_box}>
          <label className={style.form_box_label}>
          <input type='radio' />
          <p>Choice 1</p>
          </label>
          <label className={style.form_box_label}>
          <input type='radio' />
          <p>Choice 2</p>
          </label>
          <label className={style.form_box_label}>
          <input type='radio' />
          <p>Choice 3</p>
          </label>
        </form>
      );
    case 8:
      return (
        <div className={style.form_input}>
          <label>{data[0]}</label>
          <input type='text'/>
        </div>
      );
    case 9:
      return (
        <div className={style.form_input}>
          <label>{data[0]}</label>
          <input type='number' />
        </div>
      );
    case 10:
      return <input type='image' className={style.form_image}/>;
    default:
      return null;
  }
}

export default FormItems;