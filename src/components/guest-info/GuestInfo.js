import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import { Box } from '@mui/material';

import EditGuest from "../../routes/RootLayout/guest-data/edit-guest/EditGuest";
import classes from "./GuestInfo.module.scss";

function GuestInfo({ guest, onCloseModal}) {
  const [isCardExpanded, setCardState] = useState(false);
  const [modalIsVisible, setModalVisible] = useState(false); 
  const navigate = useNavigate();
  
  function onToggleCard() {
    setCardState((isCardExpanded) => !isCardExpanded);
  }

  function onShowModal() {
    navigate(`edit-guest/${guest.id}`)
    setModalVisible(true);
  }

  function closeModal() {
    onCloseModal();
    setModalVisible(false)
  }

  return (
  
    <>
      <Box className={`${classes.detailCard} ${classes.mb20} `}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'

        }}>
        <h3 className="d-flex justify-content-between">
          {guest.name}
          <span> {guest.guests} Guests</span>
        </h3>

        {isCardExpanded && (
          <>
            <li>
              <p> Adress: {guest.address}</p>
              <p> Contact: {guest.contact}</p>
              <p> Status: {guest.status} </p>
              <p> id: {guest.id}</p>
            </li>

           <button className={classes.linkButton} onClick={onShowModal}> Edit Guest</button>           
          </>
        )}

        <button className={classes.roundBtn} 
                onClick={onToggleCard}>
          <ExpandLessRoundedIcon className={`${isCardExpanded ? `${classes.arrowDown}` : `${classes.arrowUp}`} material-icons ${classes.caret}`} style={{ fontSize: '25px' }} />
        </button>
      </Box>

      {modalIsVisible && (
        <>
          <Box sx={{
            display: 'flex',
            alignItems: 'end'
          }}>
            <EditGuest  onCloseModal={closeModal}           
                        name={guest.name}
                        address={guest.address}
                        contact={guest.contact}
                        status={guest.status}
                        guests={guest.guests}
                        id={guest.id}>       
             </EditGuest>
          </Box>
          <div
            className={`${modalIsVisible && classes.backdrop}`}
            onClick={closeModal}
          >            
          </div>
        </>
      )} 
    </>

  );
}

export default GuestInfo;
