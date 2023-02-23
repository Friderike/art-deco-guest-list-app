import classes from "./GuestList.module.scss";
import GuestInfo from "../../../components/guest-info/GuestInfo";
import { useLoaderData } from "react-router-dom";

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
       noResponse = true
      } else if (guest.status === "Unsent") {
       unsent = true
      } 
      return guest
    });
  }

  return (
    checkStatus(),
    (
      <>
        <section className="d-flex flex-column align-items-center w-100">
          <h2>I am the Guest List </h2>

          <div className="d-flex justify-content-between">
            <div>
              {attending ? 
                guestsInfo.map(
                  (guest, index) => (
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
                ) : noGuests}
            </div>

            <div>
              {notAttending ?
                guestsInfo.map(
                  (guest, index) => (
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
                ) : noGuests}
            </div>
            <div>
              {noResponse ?
                guestsInfo.map(
                  (guest, index) => (
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
                ) : noGuests}
            </div>
            <div>
              {unsent ?
                guestsInfo.map(
                  (guest, index) => (
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
                ) : noGuests}
            </div>
          </div>
        </section>
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
