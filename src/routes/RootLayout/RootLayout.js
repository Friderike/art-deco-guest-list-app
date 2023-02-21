import { Outlet } from "react-router-dom";

import classes from "./RootLayout.module.scss";
import Header from "../../components/header/Header";

function RootLayout() {
  return (
    <>
      <Header />
      <Outlet className={classes.main}></Outlet>
    </>
  ); // SIDEBAR UNDER HEADER
}

export default RootLayout;
