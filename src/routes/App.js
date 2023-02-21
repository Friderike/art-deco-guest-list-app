import { Outlet } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <>
    <div className={'w-100'}>
      <h1>Hi from the App js</h1>
      <Outlet />
    </div>     
    </>
  );
}

export default App;
