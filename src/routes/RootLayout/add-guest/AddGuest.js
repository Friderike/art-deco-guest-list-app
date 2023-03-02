import { Form } from "react-router-dom";
import Modal from "../../../components/modal/Modal";

import classes from "./AddGuest.module.scss";

function AddGuest({ closeModal }) {

  return (
    <>
      <Modal>
        <Form
          method="post"
          className={`${classes.Form} d-flex flex-column align-items-center justify-content-center px-5 py-5`}
        >
          <div className={`d-flex flex-column`}>
            <label htmlFor="name">Add Guest Name</label>
            <input type="text" id="name" name="name" placeholder="Enter Name" required />
          </div>

          <div className={`d-flex flex-column`}>
            <label htmlFor="guests">Add Guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              placeholder="Enter Number of Guests"
            />
          </div>

          <div className={`d-flex flex-column`}>
            <label htmlFor="guests">Add Address</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter Address"
            />
          </div>

          <div className={`d-flex flex-column`}>
            <label htmlFor="contact">Add Contact</label>
            <input
              type="text"
              id="contact"
              name="contact"
              placeholder="Enter Contact"
            />
          </div>

          <div className={`d-flex flex-column`}>
            <label htmlFor="status">Attending</label>
            <input
              type="radio"
              id="status"
              name="status"
              value="Attending"
              defaultChecked
            />

            <label htmlFor="status">Not Attening</label>
            <input
              type="radio"
              id="status"
              name="status"
              value="Not Attending"
            />

            <label htmlFor="status">No Response</label>
            <input type="radio" id="status" name="status" value="No Response" />
            <label htmlFor="status">Unsent</label>

            <input type="radio" id="status" name="status" value="Unsent" />
          </div>

          <div className={`d-flex justify-content-end`}>
            <button type="button" onClick={closeModal} className={`${classes.linkButton} mr-3`}> Cancel</button>
            <button className={`${classes.mainButton} mr-4`}>Save</button>
          </div>
        </Form>
      </Modal>
    </>
  );
}

export default AddGuest;
