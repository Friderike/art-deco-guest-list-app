import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Box } from "@mui/material";

import classes from "./GuestList.module.scss";
import GuestInfo from "../../../components/guest-info/GuestInfo";
import invitationHeader from "../../../assets/invitations-subhead-arch.svg";
import Header from "../../../components/header/Header";
import AddGuest from "../add-guest/AddGuest";

function GuestList() {

  const navigate = useNavigate();
  const guestsInfoData = useLoaderData();
  let guestsInfo = guestsInfoData;
  const [modalIsVisible, setModalVisible] = useState(false);
  let attending = false;
  let notAttending = false;
  let noResponse = false;
  let unsent = false;
  const noGuests = "No Guests";

  function onOpenModal() {
    navigate("add-guest");
    setModalVisible((true));
  }

  function onCloseModal() {
    setModalVisible((false));
    navigate("/guest-list");
    console.log('FROM GLIST')
  }
 
  function checkStatus() {
    guestsInfo.map((guest) => {
      if (guest.status === "Attending") {
        attending = true;
      } else if (guest.status === "Not Attending") {
        notAttending = true;
      } else if (guest.status === "No Response") {
        noResponse = true;
      } else if (guest.status === "Unsent") {
        unsent = true;
      }
      return guest;
    });

  }


  return (
    checkStatus(),
    (
      <>
        <div className={`${classes.invitationContainer} d-flex flex-column`}>
          <Header pageTitle={"Invitations"}
            mainTitle={'Miranda’s Midnight Masquerade'}
            btnLeft={'/party-list'}
            btnLeftText={'Back to Parties'}
            btnRight={onOpenModal}
            btnRightText={'Add Guest'}>
          </Header>

          <section
            className={`${classes.gridCol12Cards} ${classes.mainContainerOffset} mb-5`}
          >
            <div className={`${classes.guestContainer}`}>
              <div className={`${classes.mainCardHeader}`}>
                <img
                  className={classes.cardHeaderImg}
                  src={invitationHeader}
                  alt="Header image"
                  aria-hidden="true"
                />
                <div className={classes.cardHeadingContainer}>
                  <h3 className={`${classes.cardHeading} ${classes.fontLimeLight} mb-0`}>Attending</h3>
                </div>
              </div>

              <div className={classes.mainCard}>
                {attending
                  ? guestsInfo.map(
                    (guest, index) =>
                      guest.status === "Attending" && (
                        <ul key={index}>
                          <GuestInfo
                            guest={guest}
                            onCloseModal={onCloseModal}
                          />
                        </ul>
                      )
                  )
                  : noGuests}
              </div>
            </div>

            <div className={`${classes.guestContainer} d-flex flex-column`}>
              <div className={`${classes.mainCardHeader}`}>
                <img
                  src={invitationHeader}
                  alt="Header image"
                  aria-hidden="true"
                />
                <div className={classes.cardHeadingContainer}>
                  <h3 className={`${classes.cardHeading} ${classes.fontLimeLight} mb-0`}>
                    Not Attending
                  </h3>
                </div>
              </div>
              <div className={classes.mainCard}>
                {notAttending
                  ? guestsInfo.map(
                    (guest, index) =>
                      guest.status === "Not Attending" && (
                        <ul key={index}>
                          <GuestInfo
                            guest={guest}
                            onCloseModal={onCloseModal}
                          />
                        </ul>
                      )
                  )
                  : noGuests}
              </div>
            </div>

            <div className={`${classes.guestContainer} d-flex flex-column`}>
              <div className={`${classes.mainCardHeader}`}>
                <img
                  src={invitationHeader}
                  alt="Header image"
                  aria-hidden="true"
                />
                <div className={classes.cardHeadingContainer}>
                  <h3 className={`${classes.cardHeading} ${classes.fontLimeLight} mb-0`}>No Response</h3>
                </div>
              </div>
              <div className={classes.mainCard}>
                {noResponse
                  ? guestsInfo.map(
                    (guest, index) =>
                      guest.status === "No Response" && (
                        <ul key={index}>
                          <GuestInfo
                            guest={guest}
                            onCloseModal={onCloseModal}
                          />
                        </ul>
                      )
                  )
                  : noGuests}
              </div>
            </div>

            <div className={`${classes.guestContainer} d-flex flex-column`}>
              <div className={`${classes.mainCardHeader}`}>
                <img
                  src={invitationHeader}
                  alt="Header image"
                  aria-hidden="true"
                />
                <div className={classes.cardHeadingContainer}>
                  <h3 className={`${classes.cardHeading} ${classes.fontLimeLight} mb-0`}>Unsent</h3>
                </div>
              </div>
              <div className={classes.mainCard}>
                {unsent
                  ? guestsInfo.map(
                    (guest, index) =>
                      guest.status === "Unsent" && (
                        <ul key={index}>
                          <GuestInfo
                            guest={guest}
                            onCloseModal={onCloseModal}
                          />
                        </ul>
                      )
                  )
                  : noGuests}
              </div>
            </div>
          </section>
        </div>

        {modalIsVisible && (
          <div className={'d-flex flex-column '}>
            <div className={classes.modalContainer}>
              <AddGuest closeModal={onCloseModal} />
            </div>
          </div>
        )}
        <div
          className={`${modalIsVisible && classes.backdrop}`}
          onClick={onCloseModal}>
        </div>
      </>
    )
  );
}

export default GuestList;

export async function loader() {
  const response = await fetch("/guest_info");
  const resData = await response.json();
  console.log('fetching')
  return resData;
}

export async function action({ request }) {
  const formData = await request.formData();
  const enteredGuestInfo = {
    name: formData.get("name"),
    guests: formData.get("guests"),
    address: formData.get("address"),
    contact: formData.get("contact"),
    status: formData.get("status"),
  };

  const response = await fetch("/guest_info", {
    method: "Post",
    body: JSON.stringify(enteredGuestInfo),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}
