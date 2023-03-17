import { Link } from 'react-router-dom';

import classes from './SideBar.module.scss';
import dashBoardIcon from '../../assets/icons/dashboard-icon.svg'
import invitesIcon from '../../assets/icons/invites-icon.svg'
import bevviesIcon from '../../assets/icons/bevvies-icon.svg'
import softDrinksIcon from '../../assets/icons/soft-drinks-icon.svg'
import foodIcon from '../../assets/icons/food-icon.svg'
import goodiesIcon from '../../assets/icons/goodies-icon.svg'
import settingsIcon from '../../assets/icons/settings-icon.svg'
import logoutIcon from '../../assets/icons/logout-icon.svg'
import { Box } from '@mui/material';

function SideBar({ sideBarTitle }) {
    const sideBarIcons = [{image : dashBoardIcon, alt: 'Dashboard', path: "/under-construction"}, 
                        {image: invitesIcon, alt: 'Invites', path: "/under-construction"},
                        {image: bevviesIcon, alt: 'Beverages', path: "/under-construction"},
                        {image: softDrinksIcon, alt: 'Soft drinks', path: "/under-construction"},
                        {image: foodIcon, alt: 'Food', path: "/under-construction"},
                        {image: goodiesIcon, alt: 'Goodies', path: "/under-construction"},
                        {image: settingsIcon, alt:'Setttings', path: "/under-construction"},
                        {image: logoutIcon, alt: 'Logout', path: '/'}]

    return (
        <>
            <aside className={`${classes.sideBarContainer} ${classes.hiddenOnMobile}`}>

                <Box className={classes.sideBarTitleContainer}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        p: 1,
                        border: 2
                    }}>
                    <div className={`${classes.sideBarTitle} ${classes.fontLimeLight} `}>
                        <h3>{sideBarTitle}</h3>
                    </div>
                </Box>

                <nav className={`${classes.sideBarNav} ${classes.pt62}`}>
                    <ul className={`d-flex flex-column align-items-center justify-content-between`}>
                        {sideBarIcons.map((icon, index) => (
                            <li key={index} className={classes.sideBarIcons}>
                                {
                                    <Link to={icon.path}>
                                        <img src={icon.image} alt={icon.alt} />
                                    </Link>
                                }
                            </li>
                        ))
                        }
                    </ul>
                </nav>
            </aside>
        </>
    )
};

export default SideBar;