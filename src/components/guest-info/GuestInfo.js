import { useState } from "react";
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';

import classes from "./GuestInfo.module.scss";

function GuestInfo({ name, address, contact, status, guests, id, showModal, closeModal}) {
  const [isCardExpanded, setCardState] = useState(false);

  function onToggleCard() {
    setCardState((isCardExpanded) => !isCardExpanded);
  }

  return (
    <>
    <div className={`${classes.detailCard} ${classes.mb20} d-flex flex-column`}>
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
      
      <button className={classes.roundBtn} onClick={onToggleCard}>
       <ExpandLessRoundedIcon className={`${isCardExpanded ? `${classes.arrowDown}` : `${classes.arrowUp}`} material-icons ${classes.caret}`} style={{fontSize: '25px'}}/>
      </button>
    </div>
    
    </>
  );
}

export default GuestInfo;
