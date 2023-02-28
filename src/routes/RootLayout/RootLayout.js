import { Outlet } from "react-router-dom";

import classes from "./RootLayout.module.scss";
import SideBar from "../../components/sidebar/SideBar";

function RootLayout() {
  return (
    <>
      <SideBar />
      <div className={classes.outerContainer}>
        <main className={classes.mainContainer}>
          <div className={classes.mainContent}>
            <Outlet className={classes.main}></Outlet>
          </div>
        </main>
      </div>
    </>
  ); // SIDEBAR UNDER HEADER
}

export default RootLayout;
