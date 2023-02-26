import { useLoaderData } from "react-router-dom";

import classes from './GuestList.module.scss'
import GuestInfo from "../../../components/guest-info/GuestInfo";
import invitationHeader from '../../../assets/invitations-subhead-arch.svg'

function GuestList() {
  const guestsInfo = useLoaderData();
  let attending = false;
  let notAttending = false;
  let noResponse = false;
  let unsent = false;
  const noGuests = "No Guests";

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
      <div className={classes.invitationContainer}>
        <h2>I am the Guest List </h2>
        <section className={classes.gridCol12}>
          <div className={`${classes.invitationContainer} d-flex flex-column`}>
            <div className={`${classes.guestCardHeader}`}>   
          <img src={invitationHeader} alt="Attending" />
            </div>
            <div className={classes.guestCard}>
              {attending
                ? guestsInfo.map((guest, index) =>
                      guest.status === "Attending" && (
                        <ul key={index}>
                          <GuestInfo
                            name={guest.name}
                            address={guest.address}
                            contact={guest.contact}
                            status={guest.status}
                            guests={guest.guests}
                            id={guest.id}
                          />
                        </ul>
                      )
                  )
                : noGuests}
            </div>         
            </div>

            <div className={classes.guestCard}>
              {notAttending
                ? guestsInfo.map(
                    (guest, index) =>
                      guest.status === "Not Attending" && (
                        <ul key={index}>
                          <GuestInfo
                            name={guest.name}
                            address={guest.address}
                            contact={guest.contact}
                            status={guest.status}
                            guests={guest.guests}
                            id={guest.id}
                          />
                        </ul>
                      )
                  )
                : noGuests}
            </div>
            <div className={classes.guestCard}>
              {noResponse
                ? guestsInfo.map(
                    (guest, index) =>
                      guest.status === "No Response" && (
                        <ul key={index}>
                          <GuestInfo
                            name={guest.name}
                            address={guest.address}
                            contact={guest.contact}
                            status={guest.status}
                            guests={guest.guests}
                            id={guest.id}
                          />
                        </ul>
                      )
                  )
                : noGuests}
            </div>
            <div className={classes.guestCard}>
              {unsent
                ? guestsInfo.map(
                    (guest, index) =>
                      guest.status === "Unsent" && (
                        <ul key={index}>
                          <GuestInfo
                            name={guest.name}
                            address={guest.address}
                            contact={guest.contact}
                            status={guest.status}
                            guests={guest.guests}
                            id={guest.id}
                          />
                        </ul>
                      )
                  )
                : noGuests}
            </div>
      
        </section>
        </div>
      </>
    )
  );
}

export default GuestList;

export async function loader() {
  const response = await fetch("http://localhost:8080/guest_info");
  const resData = await response.json();
  return resData;
}

export async function action({ request}) {

  const formData = await request.formData();
  const enteredGuestInfo = {
    name: formData.get('name'),
    guests: formData.get('guests'),
    contact: formData.get('contact'),
    status: formData.get('status')
  }

  const response = await fetch("http://localhost:8080/guest_info", {
     method: "Post",
     body: JSON.stringify(enteredGuestInfo),
     headers: {
      "Content-Type": "application/json",
     }
  });   
  return response;    
}