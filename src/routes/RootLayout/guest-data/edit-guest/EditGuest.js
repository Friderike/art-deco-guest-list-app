import { useState, useRef } from 'react';
import { Form } from 'react-router-dom';
import { Box } from '@mui/material';

import classes from './EditGuest.module.scss';
import Modal from '../../../../components/modal/Modal';

function EditGuest({ onCloseModal, name, address, contact, status, guests, id}) {

    let currentGuestData = {
        name: name,
        address: address,
        contact: contact,
        status: status,
        guests: guests,
        id: id
    };

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
        !isNaN(parseInt(guestRef.current.value)) ? currentGuestData.guests = guestRef.current.value : alert('Guests value must be a number');
        // currentGuestData.status = statusRef.current.value;

        console.log(statusRef.current.value, nameRef.current.value, guestData.status)
        console.log('mounting');

        onCloseModal();

        setNewGuestData();
    };

  async function setNewGuestData() {
        console.log(currentGuestData.guests, parseInt(guestRef.current.value))
        setGuestData(currentGuestData)

        const responseData = await fetch(`/guest_info/${currentGuestData.id}`, {
            method: "Put",
            body: JSON.stringify(guestData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        console.log('mounting');
        onCloseModal();   
        
        return responseData;
    }

    return (
        console.log('ID: from EG', currentGuestData.id, guestData.name),
        <>
            <Modal >
                <Form method="put">
                    <section>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                            <label htmlFor="name"> Edit Name </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                ref={nameRef}
                                placeholder={guestData.name}
                                defaultValue={guestData.name}
                            />

                            <label htmlFor="guests"> Edit Number Of Guests </label>
                            <input
                                type="number"
                                name="guests"
                                id="guests"
                                ref={guestRef}
                                placeholder={guestData.guests}
                                defaultValue={guestData.guests}
                            />

                            <label htmlFor="address"> Edit Address </label>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                ref={addressRef}
                                placeholder={address}
                                defaultValue={guestData.address}
                            />

                            <label htmlFor="email"> Edit Email Address </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                ref={contactRef}
                                placeholder={contact}
                                defaultValue={guestData.contact}
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
                                            // value="Attending"
                                            ref={statusRef}
                                            defaultValue={guestData.status}
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
                                            // ref={statusRef}
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
                        <button onClick={onCloseModal}
                            className={`${classes.linkButton} ${classes.mr2}`}
                        >
                            Cancel
                        </button>
                        <button type='button' onClick={changeGuestData} className={classes.mainButton}>
                            Save
                        </button>
                    </Box>
                </Form>
            </Modal>
        </>
    )
}

export default EditGuest;


