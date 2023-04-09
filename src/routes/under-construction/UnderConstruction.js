import { Link } from "react-router-dom";
import { Container, Box } from "@mui/material";
import classes from './UnderConstruction.module.scss';

function UnderConstruction() {

    return (
        <>
            <Container sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>

                    <h1 className={classes.fontLimeLight}>
                        This part of the App is still being created!
                    </h1>
                    <p>
                        Please return to
                    </p>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        pt: 4
                    }}>
                        <Link to='../guest-list' className={`${classes.mainButton} mr-3`}>
                            Guest List
                        </Link>
                        <Link to='../party-list' className={`${classes.font18}} ${classes.textStrokeBlack}`}>
                            Party List
                        </Link>
                    </Box>

                </Box>
            </Container>

        </>
    )
}

export default UnderConstruction;