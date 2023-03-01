import { Outlet, useNavigate } from "react-router-dom";

import "./App.scss";

function App() {
  const navigate = useNavigate()
  function enterApp() {
   navigate('/party-list')
  }
  return (
    <>
    <div className={'w-100'}>
      <h1>Hi from the App js</h1>
      <button onClick={enterApp}>Enter</button>
      <Outlet />
    </div>     
    </>
  );
}

export default App;
