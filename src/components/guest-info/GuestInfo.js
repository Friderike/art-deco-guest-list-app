import { useState } from "react";

import classes from "./GuestInfo.module.scss";
import Modal from "../modal/Modal";

function GuestInfo({ name, address, contact, status, guests }) {
  const [isCardExpanded, setCardState] = useState(false);
  let [modalIsVisible, setModalOpen] = useState(false);

  function onToggleCard() {
    setCardState((isCardExpanded) => !isCardExpanded);
  }

  function onOpenModal() {
    setModalOpen((modalIsVisible = true));
    console.log(modalIsVisible);
  }

  function onCloseModal() {
    setModalOpen((modalIsVisible = false));
  }

  return (
    <>
      <h3 className="d-flex justify-content-between">
        {name}
        <span> {guests} Guests</span>
      </h3>

      {isCardExpanded && (
        <>
          <li>
            <p> Adress: {address}</p>
            <p>Contact: {contact}</p>
            <p> Status: {status} </p>
          </li>

          <button onClick={onOpenModal}>Edit</button>
        </>
      )}

      <button onClick={onToggleCard}>Expand</button>
    
      {modalIsVisible && (
        <div className={classes.modalContainer}>
        <Modal>
          <button onClick={onCloseModal}>Cancel</button>
        </Modal>
        <div className={classes.backdrop} onClick={onCloseModal}></div>
        </div>
      )}
    </>
  );
}

export default GuestInfo;
