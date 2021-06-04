import React from 'react';

const Modal = ({ handleClose, show, msg }) => {
  console.log(show)
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h2>{msg}</h2>
        <button type="button" class="button" onClick={handleClose("ok")}>
          OK
        </button>
        <button type="button" class="button" onClick={handleClose("close")}>
          Close
        </button>
      </section>
    </div>
  );
}

export default Modal;