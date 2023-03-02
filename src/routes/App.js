import { Outlet, useNavigate } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import classes from './App.module.scss'
import "./App.scss";

function App() {
  const navigate = useNavigate()
  function enterApp() {
    navigate('/party-list')
  }

  return (
    <>
      <div className={`${classes.landingContainer} w-100 `}>
        <div className={classes.decoCornersTop}></div>

        <div className="d-flex align-items-center justify-content-center">
          <button onClick={enterApp} className={`${classes.fontLimeLight} ${classes.linkButton} ${classes.font35}`}>
            Enter 
            <ArrowForwardIcon className="material-icons" style={{fontSize: "25px" }} />
          </button>
        </div>

        <div className={classes.decoCornersBottom}> </div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
