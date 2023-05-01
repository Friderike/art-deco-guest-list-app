import { useState, useRef } from 'react';
import { Form } from 'react-router-dom';
import { Box } from '@mui/material';

import classes from './EditGuest.module.scss';
import Modal from '../../../../components/modal/Modal';


function EditGuest({ closeModal, name, address, contact, status, guests, id }) {

    let currentGuestData = {
        name: name,
        address: address,
        contact: contact,
        status: status,
        guests: guests
    };
  
    // const guest = {
    //     name: name,
    //     guests: guests,
    //     address: address,
    //     contact: contact,
    //     status: status
    //   }
     

    const [guestData, setGuestData] = useState(currentGuestData);

    const nameRef = useRef();
    const addressRef = useRef();
    const contactRef = useRef();
    const statusRef = useRef();
    const guestRef = useRef();

    async function changeGuestData() {
        
        nameRef.current.value.trim().length > 0 ? currentGuestData.name = nameRef.current.value : alert('please enter a valid name');
        addressRef.current.value.trim().length > 0 ? currentGuestData.address = addressRef.current.value : alert('Please enter a valid address');
        contactRef.current.value.trim().length > 0 ? currentGuestData.contact = contactRef.current.value : alert('Please enter a valid email address');
        guestRef.current.value = !currentGuestData.guests ? currentGuestData.guests = guestRef.current.value : currentGuestData.guests = currentGuestData.guests;

     
            currentGuestData = {
            name: currentGuestData.name,
            address: currentGuestData.address,
            contact: currentGuestData.contact,
            status: currentGuestData.status,
            guests: currentGuestData.guests
        }

        // console.log('data:', currentGuestData);
    
        const responseData = await fetch(`/guest_info/${id}`, {
            method: "Put",
            body: JSON.stringify(currentGuestData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        setGuestData(currentGuestData);
        // console.log('mounting');
        closeModal();

        return responseData;
    }

    return (
        console.log('ID:', id),
        <>
            <Modal >
                <Form method="put">
                    <section>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            // USE THE MODALCONTAINER FROM GUESTLIST AS GLOBAL HERE?
                        }}>
                            <label htmlFor="name"> Edit Name </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                ref={nameRef}
                                placeholder={guestData.name}
                                defaultValue ={currentGuestData.name}
                            />

                            <label htmlFor="guests"> Edit Number Of Guests </label>
                            <input
                                type="number"
                                name="guests"
                                id="guests"
                                ref={guestRef}
                                placeholder={guests}
                                defaultValue ={currentGuestData.guest}
                            />

                            <label htmlFor="address"> Edit Address </label>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                ref={addressRef}
                                placeholder={address}
                                defaultValue ={currentGuestData.address}
                            />

                            <label htmlFor="email"> Edit Email Address </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                ref={contactRef}
                                placeholder={contact}
                                defaultValue ={currentGuestData.contact}
                            />


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
                                            ref={statusRef}
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
                                            ref={statusRef}
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
                                            value="No Response"
                                            ref={statusRef}
                                        />

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
                                            value="Unsent"
                                            ref={statusRef}
                                        />
                                    </Box>
                                </div>
                            </div>
                        </Box>
                    </section>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mt: 2
                    }}>
                        <button onClick={closeModal}
                            className={`${classes.linkButton} ${classes.mr2}`}
                        >
                            Cancel
                        </button>
                        <button type='button' onClick={changeGuestData} className={classes.mainButton}>
                        <a href='/guest-list'>Save</a></button>
                    </Box>
                </Form>
            </Modal>
        </>
    )
}

export default EditGuest;


