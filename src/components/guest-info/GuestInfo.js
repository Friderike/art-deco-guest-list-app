import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import { Box } from '@mui/material';

// import Modal from "../modal/Modal";
import EditGuest from "../../routes/RootLayout/guest-data/edit-guest/EditGuest";
import classes from "./GuestInfo.module.scss";

function GuestInfo({ name, address, contact, status, guests, id, showModal, closeModal }) {
  const [isCardExpanded, setCardState] = useState(false);
  let [isModalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();
  const [enteredName, setEnteredName] = useState(name);

  function onToggleCard() {
    setCardState((isCardExpanded) => !isCardExpanded);
  }

  function onShowModal() {
    navigate('edit-guest')
    setModalVisible(isModalVisible = true);
    console.log(isModalVisible)
  }

  function onCloseModal() {
    setModalVisible(isModalVisible = false);
    navigate('/guest-list')
  }

  // function changeNameHandler(event) {
  //   setEnteredName(event.target.value)
  //   if (enteredName.trim().length > 0) {
  //     console.log(enteredName)
  //   } else {
  //     alert('please enter name')
  //   }

  // }

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
              <p>Contact: {contact}</p>
              <p> Status: {status} </p>
              <p>id: {id}</p>
            </li>

            <button className={classes.linkButton} onClick={onShowModal}> Edit Guest</button>
          </>
        )}

        <button className={classes.roundBtn} onClick={onToggleCard}>
          <ExpandLessRoundedIcon className={`${isCardExpanded ? `${classes.arrowDown}` : `${classes.arrowUp}`} material-icons ${classes.caret}`} style={{ fontSize: '25px' }} />
        </button>
      </Box>

      {isModalVisible && (
        <>
          <Box sx={{
            display: 'flex',
            alignItems: 'end'
          }}>
            <EditGuest closeModal={onCloseModal}></EditGuest>
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
