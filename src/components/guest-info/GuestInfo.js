import { useState } from "react";
import { Form } from "react-router-dom";

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

          <button className={classes.squareButton} onClick={onOpenModal}>Edit</button>
        </>
      )}

      <button className={classes.linkButton} onClick={onToggleCard}>{isCardExpanded ? 'Close' : 'Expand'}</button>
    
      {modalIsVisible && (
        <div className={classes.modalContainer}>
        <Modal>
          <Form className={`${classes.Form} d-flex flex-column align-items-center justify-content-center px-5 py-5` }>
         
         <div className={`d-flex flex-column`}>
           <label htmlFor="guestName">Edit Guest Name</label>
          <input type="text" id="guestName"/>
         </div>

         <div className={`d-flex flex-column`}>
           <label htmlFor="guests">Edit Guests</label>
          <input type="number" id="guests" value={guests}/>
         </div>
         <div className={`d-flex flex-column`}>
           <label htmlFor="contact">Edit Contact</label>
          <input type="text" id="contact"/>
         </div>
         
         <div className={`d-flex justify-content-end`}></div>
          <button className={classes.mainButton} >Save</button>
          <button type="button" onClick={onCloseModal}>Cancel</button>
          </Form>
          </Modal>
        <div className={classes.backdrop} onClick={onCloseModal}></div>
      
        </div>
      )}
    </>
  );
}

export default GuestInfo;
