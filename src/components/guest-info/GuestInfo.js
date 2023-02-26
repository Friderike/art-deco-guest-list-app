import { useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./GuestInfo.module.scss";
import Modal from "../modal/Modal";
import AddGuest from "../../routes/RootLayout/add-guest/AddGuest";

function GuestInfo({ name, address, contact, status, guests, id }) {
  const navigate = useNavigate();
  const [isCardExpanded, setCardState] = useState(false);
  let [modalIsVisible, setModalOpen] = useState(false);

  function onToggleCard() {
    setCardState((isCardExpanded) => !isCardExpanded);
  }

  function onOpenModal() {
    setModalOpen((modalIsVisible = true));
    navigate("add-guest");
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

          <button className={classes.squareButton} onClick={onOpenModal}>
            Add Guest
          </button>
        </>
      )}

      <button className={classes.linkButton} onClick={onToggleCard}>
        {isCardExpanded ? "Close" : "Expand"}
      </button>

      {modalIsVisible && (
        <div className={classes.modalContainer}>
          <Modal>
            <AddGuest
              name={name}
              address={address}
              contact={contact}
              status={status}
              guests={guests}
              id={id}
             closeModal={onCloseModal}
            />
          </Modal>
          <div className={classes.backdrop} onClick={onCloseModal}></div>
        </div>
      )}
    </>
  );
}

export default GuestInfo;
