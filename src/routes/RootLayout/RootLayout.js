import { Outlet, useLocation } from "react-router-dom";

import classes from "./RootLayout.module.scss";
import SideBar from "../../components/sidebar/SideBar";

function RootLayout() {
  let sideNavTitle
  const location = useLocation()

  function getSideBarTitle() {
    sideNavTitle = location.pathname.substring(1).split('-').join(' ');
    
    if (sideNavTitle.includes('/')) {
      const shortPathName = sideNavTitle.split('/')
      sideNavTitle = shortPathName[shortPathName.length - 1]
      return sideNavTitle;
    } else {
      return sideNavTitle;
    }
  }
  // console.log(location) // create variable in function in every component and move the sidebar there / pass in the name of the variable? Or lift it to sidebar (useContext?)
  getSideBarTitle();

  return (

    <>
      <SideBar sideBarTitle={sideNavTitle}></SideBar>

      <div className={classes.outerContainer}>
        <main className={classes.mainContainer}>
          <div className={classes.mainContent}>
            <Outlet className={classes.main}></Outlet>
          </div>
        </main>
      </div>
    </>
  );
}

export default RootLayout;
