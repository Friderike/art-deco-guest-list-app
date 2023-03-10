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

function SideBar({ sideBarTitle }) {
    const sideBarIcons = [dashBoardIcon, invitesIcon, bevviesIcon, softDrinksIcon, foodIcon, goodiesIcon, settingsIcon, logoutIcon]

    return (
        <>
            <aside className={`${classes.sideBarContainer} ${classes.hiddenOnMobile}`}>

                <div className={`${classes.sideBarTitle} ${classes.fontLimeLight} `}>
                    <h3>{sideBarTitle}</h3>
                </div>

                <nav className={`${classes.sideBarNav} ${classes.pt62} pb-5`}>
                    <ul className={`d-flex flex-column align-items-center justify-content-between pt-5`}>
                        {sideBarIcons.map((icon, index) => (
                            <li key={index} className={classes.sideBarIcons}>
                                {icon === logoutIcon ? <Link to='/'><img src={icon} alt="" /></Link> :
                                    <Link >
                                        <img src={icon} alt="" />
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