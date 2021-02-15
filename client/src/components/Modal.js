import React from "react";
import ReactDom from "react-dom";

const Modal = (props) => {
  //stopPropagation makes sure that parent event doesn't bubble up
  return ReactDom.createPortal(
    <div onClick={props.onDismiss} >
      <div className="ui dimmer modals visible active">
        <div
          onClick={(e) => e.stopPropagation()}
          className="ui standard modal visible active"
        >
          <div className="header">{props.title}</div>
          <div className="content">{props.content}</div>
          <div className="actions">{props.actions}</div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
