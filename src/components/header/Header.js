// import { useLocation, useNavigate } from "react-router-dom";

import classes from "./Header.module.scss";

function Header({ pageTitle, mainTitle, children }) {
 
  return (
    <>
      <header className={"d-flex flex-column w-100 "}>
        <div className={`${classes.headerTopSection} ${classes.mainContainerOffset}`}>
               <div className={classes.mainTitleContainer}>
               <h1 className={`text-center ${classes.mainTitleHeading}`}>{mainTitle}</h1>
              </div>   
          {children}
        </div>
       
        <h2 className="text-center">{pageTitle}</h2>
      </header>
    </>
  );
}

export default Header;
