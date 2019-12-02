import React from "react";
import Popup from "reactjs-popup";
import  "./FormPreview.css";

const FormPreview = () => (
  <Popup trigger={<button className="button"> Form Preview </button>} modal>
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <h3> Form Preview </h3>
        <div className="content">
          <table>

          </table>
        </div>
      </div>
    )}
  </Popup>
);
export default FormPreview;