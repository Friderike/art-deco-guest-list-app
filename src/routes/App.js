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
      <div className={`${classes.landingContainer} w-100`}>

        <div className="d-flex align-items-center">
          <button onClick={enterApp} className={`${classes.fontLimeLight} ${classes.linkButton} ${classes.font35} mr-4`}>
            Enter
          </button>
          <ArrowForwardIcon className="material-icons" style={{ fontSize: "25px" }} />
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
