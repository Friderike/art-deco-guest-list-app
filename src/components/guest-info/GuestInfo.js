import { useState } from "react";

import classes from "./GuestInfo.module.scss";

function GuestInfo({ name, address, contact, status, guests }) {
  let [isCardExpanded, setCardState] = useState(false);

  function onToggleCard() {
    setCardState((isCardExpanded) => !isCardExpanded);
  }

  return (
    <>
      <h3 className="d-flex justify-content-between">
        {name}
        <span> {guests} Guests</span>
      </h3>

      {isCardExpanded && (
        <li>
          <p> Adress: {address}</p>
          <p>Contact: {contact}</p>
          <p> Status: {status} </p>
        </li>
      )}

      <button onClick={onToggleCard}>Expand</button>
    </>
  );
}

export default GuestInfo;
