import { useState } from "react";

import classes from "./GuestInfo.module.scss";

function GuestInfo({ name, address, contact, status, guests, id, showModal, closeModal}) {
  const [isCardExpanded, setCardState] = useState(false);

  function onToggleCard() {
    setCardState((isCardExpanded) => !isCardExpanded);
  }

  return (
    <>
    <div className="d-flex flex-column">
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

        </>
      )}
      
      <button className={classes.linkButton} onClick={onToggleCard}>
        {isCardExpanded ? "Close" : "Expand"}
      </button>

      {/* {showModal && (
        <div className={`${classes.addGuestContainer} 'd-flex flex-column '`}>
        <div className={classes.modalContainer}>
      
            <AddGuest
              name={name}
              address={address}
              contact={contact}
              status={status}
              guests={guests}
              id={id}
            />
         <button onClick={closeModal}>
          Cancel
          </button>
  
        </div>
        </div>
    )} */}
    </div>
    
    </>
  );
}

export default GuestInfo;
