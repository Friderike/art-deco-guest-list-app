import { useLocation, useNavigate } from "react-router-dom";

import classes from "./Header.module.scss";

function Header({ pageTitle, children }) {
  const location = useLocation();
  const navigate = useNavigate();

  function navigateHandler() {
    if (location.pathname.includes('/guest-list')) {
      navigate("/party-list");
    } else if (location.pathname === '/party-list') {
      console.log(location.pathname)
      navigate("/guest-list");
    }
  }

  return (
    <>
      <header className={"d-flex flex-column w-100 "}>
        <div className={`d-flex align-items-center ${classes.headerTopSection} ${classes.mainContainerOffset}`}>
          <div className={` ${classes.backBtnContainer}`}>
            <button className={`${classes.mainButton}`} onClick={navigateHandler}>
              {location.pathname.includes('/guest-list') ? 'Back to Parties' : 'Guest List'}
            </button>
          </div>
          {children}
        </div>

        <h1></h1>
        <h2 className="text-center">{pageTitle}</h2>
      </header>
    </>
  );
}

export default Header;
