import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import { Box } from '@mui/material';

import EditGuest from "../../routes/RootLayout/guest-data/edit-guest/EditGuest";
import classes from "./GuestInfo.module.scss";

function GuestInfo({ name, address, contact, status, guests, id}) {
  const [isCardExpanded, setCardState] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  // const guest = {
  //   name: name,
  //   guests: guests,
  //   address: address,
  //   contact: contact,
  //   status: status
  // }
 
  const navigate = useNavigate();

  function onToggleCard() {
    setCardState((isCardExpanded) => !isCardExpanded);
  }

  function onShowModal() {
    navigate('edit-guest')
    setModalVisible(true);
  }

  function onCloseModal() {
    setModalVisible(false);
    navigate('/guest-list');
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
          {name}
          <span> {guests} Guests</span>
        </h3>

        {isCardExpanded && (
          <>
            <li>
              <p> Adress: {address}</p>
              <p> Contact: {contact}</p>
              <p> Status: {status} </p>
              <p> id: {id}</p>
            </li>

           <button className={classes.linkButton} onClick={onShowModal}> Edit Guest</button>           
          </>
        )}

        <button className={classes.roundBtn} 
                onClick={onToggleCard}>
          <ExpandLessRoundedIcon className={`${isCardExpanded ? `${classes.arrowDown}` : `${classes.arrowUp}`} material-icons ${classes.caret}`} style={{ fontSize: '25px' }} />
        </button>
      </Box>

      {isModalVisible && (
        <>
          <Box sx={{
            display: 'flex',
            alignItems: 'end'
          }}>
            <EditGuest closeModal={onCloseModal}
                        name={name}
                        address={address}
                        contact={contact}
                        status={status}
                        guests={guests}
                        id={id}>       
             </EditGuest>
          </Box>
          <div
            className={`${isModalVisible && classes.backdrop}`}
            onClick={onCloseModal}
          ></div>
        </>
      )}
    </>

  );
}

export default GuestInfo;
