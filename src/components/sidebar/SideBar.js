import classes from './SideBar.module.scss';

function SideBar() {
    return (
        <>
        <aside className={`${classes.sideBarContainer} ${classes.mobileOnly}`}>
            <nav>
                <ul className={`'d-flex flex-column align-items-center' `}>
                    <li>
                         'Side bar here'
                    </li>
                </ul>
            </nav>
        </aside>
        </>
       
    )
};

export default SideBar;