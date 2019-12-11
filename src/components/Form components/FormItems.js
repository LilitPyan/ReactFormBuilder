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
            <option>{data[0]}</option>
        </select>
      );
    case 6:
      return(

              <>
             <input type='checkbox' className={style.form_textInput}/>
             <p>{data[0]}</p>
        </>
      );
    case 7:
      return <p>{data[0].text}</p>;



      case 8:
      return (
        <>
          <label>{data[0]}</label> :
          <input type='text' className={style.form_textInput}/>
        </>
      );
    case 9:
      return (
        <>
          <label>{data[0]}</label> :
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