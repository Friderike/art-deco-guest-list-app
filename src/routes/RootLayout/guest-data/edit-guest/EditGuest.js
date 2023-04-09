import classes from './EditGuest.module.scss';
import { Form } from 'react-router-dom';
// import { Box, Button} from '@mui/material';
import { Box } from '@mui/material';

import Modal from '../../../../components/modal/Modal';

function EditGuest({ closeModal }) {


    function changeNameHandler(event) {


        // setEnteredName(event.target.value)
        // if (enteredName.trim().length > 0) {
        //     console.log(enteredName)
        // } else {
        //     alert('please enter name')
        // }

    }

    return (

        <>
            <Modal >
                <Form method="Post">
                    <section> 
                        <Box sx={{ display:  'flex',
                                   flexDirection: 'column',
                                   alignItems: 'center',
                                   // USE THE MODALCONTAINER FROM GUESTLIST AS GLOBAL HERE?
                                   }}> 
                        <label htmlFor="name"> Edit Name </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                // placeholder={name}
                                onChange={changeNameHandler} />

                        <label htmlFor="guests"> Edit Number Of Guests </label>
                            <input
                                type="number"
                                name="guests"
                                id="guests"
                                placeholder="'Enter Guests" />

                        <label htmlFor="address"> Edit Address </label>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                placeholder="'Enter Address" />

                        <label htmlFor="email"> Edit Email Address </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="'Enter Email Address" />

                        <label htmlFor="status"> Edit Status </label>
                            <input
                                type="text"
                                name="status"
                                id="status"
                                placeholder="'Enter Status" />
                       </Box>
                    </section>

                    <Box sx={{ display: 'flex',
                             justifyContent: 'center',
                             alignItems: 'center',
                             mt: 2
                             }}>
                    <button onClick={closeModal} 
                            className={`${classes.linkButton} ${classes.mr2}`}
                    >
                                Cancel
                    </button>
                    <button onClick={changeNameHandler} className={classes.mainButton}>Save</button>
                    </Box>
                        {/* <p>{enteredName}</p> */}
                </Form>
            </Modal>
        </>

    )


}

export default EditGuest;