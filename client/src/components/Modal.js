import React from "react";
import Form from "./Form";

function Modal() {
  return (
    <div className="fixed w-3/12 rounded-md bg-white z-50 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-3">
      <div></div>
      <Form></Form>
    </div>
  );
}

export default Modal;
