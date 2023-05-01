import { Form } from "react-router-dom";
import { useState } from "react";
import Modal from "../../../components/modal/Modal";
import { Box } from "@mui/material";

import classes from "./AddGuest.module.scss";

function AddGuest({ closeModal }) {

  const [showSucess, setShowSuccess] = useState(false)

  function handleSubmitForm() {
    setTimeout(() => {
      closeModal()
    }, 1300)

    setShowSuccess(true);
    console.log(showSucess)
  }
  return (
    <>
      <Modal>
        <Form
          method="post"
          className={`d-flex flex-column align-items-center justify-content-center`}
        >
          <Box sx={{
            width: '100%',
            maxWidth: '35rem'
          }}>
          <div className={`d-flex flex-column mb-2`}>
            <label htmlFor="name">Add Guest Name</label>
            <input  type="text"
              id="name"
              name="name"
              placeholder="Enter Name"
              required />
          </div>

          <div className={`d-flex flex-column mb-2`}>
            <label htmlFor="guests">Add Guests</label>
            <input 
              type="number"
              id="guests"
              name="guests"
              placeholder="Enter Number of Guests"
            />
          </div>

          <div className={`d-flex flex-column mb-2`}>
            <label htmlFor="guests">Add Address</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter Address"
              required
            />
          </div>

          <div className={`d-flex flex-column mb-2`}>
            <label htmlFor="contact">Add Contact</label>
            <input 
              type="text"
              id="contact"
              name="contact"
              placeholder="Enter Contact"
              required
            />
          </div>

          <div className={`d-flex  flex-column align-items-center  flex-md-row mt-4`}>
          <div className="d-flex flex-column justify-content-start align-items-center" >
            <Box sx={{
              display: 'flex',
              flexDirection: 'row-reverse',
              justifyContent: 'start',
              alignItems: 'center',
              width: '100%'
            }}>
              <label htmlFor="status">Attending</label>
              <input
                type="radio"
                id="status"
                name="status"
                value="Attending"
                defaultChecked
              />
           </Box>

            <Box sx={{
              display: 'flex',
              flexDirection: 'row-reverse',
              justifyContent: 'start',
              alignItems: 'center',
              width: '100%'
            }}>
              <label htmlFor="status">Not Attening</label>
              <input
                type="radio"
                id="status"
                name="status"
                value="Not Attending"
              />
            </Box>
            </div>

            <div className="d-flex flex-column justify-content-start align-items-center ml-md-4" >  
            <Box sx={{
              display: 'flex',
              flexDirection: 'row-reverse',
              justifyContent: 'start',
              alignItems: 'center',
              width: '100%'

            }}>   
            <label htmlFor="status">No Response</label>
              <input type="radio"
                id="status"
                name="status"
                value="No Response" />
            </Box>

            <Box sx={{
              display: 'flex',
              flexDirection: 'row-reverse',
              justifyContent: 'start',
              alignItems: 'center',
              width: '100%'
            }}>
              <label htmlFor="status">Unsent</label>
              <input type="radio"
                id="status"
                name="status"
                value="Unsent" />
            </Box>
            </div>
          </div>
          </Box>

          <div className={`d-flex justify-content-end mt-5`}>
            <button type="button" onClick={closeModal} className={`${classes.linkButton} mr-3`}> Cancel</button>
            <button type="submit" onClick={handleSubmitForm} className={classes.mainButton}>Save</button>
          </div>
        </Form>

        {showSucess ? (
          <div className={`${classes.mainContainerOffset} ${classes.successText}`}>
            <p className={classes.font35}>Guest Added!</p>
          </div>
        ) : ''}

      </Modal>
    </>
  );
}

export default AddGuest;
