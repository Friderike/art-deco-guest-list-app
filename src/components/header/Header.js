import { useLocation, useNavigate } from "react-router-dom";

import classes from "./Header.module.scss";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  function navigateHandler() {
    if (location.pathname === '/guest-list') {
      navigate("/party-list");
    } else if (location.pathname === '/party-list') {
      navigate("/guest-list");
    }
  }
  
  return (
    <>
      <header className={"d-flex justify-content-between mb-4 px-4 my-4"}>
        <h2>I am the awesome header          
        </h2>

        <button className={classes.headerBtn} onClick={navigateHandler}>
          {location.pathname === '/guest-list'? 'Back to Parties' : 'Guest List'}
          </button>
      </header>
    </>
  );
}

export default Header;
