import { Outlet } from "react-router-dom";

import "./App.scss";
import PartyList from "./RootLayout/landing/PartyList";
import GuestList from "./RootLayout/guest-list/GuestList";

function App() {
  return (
    <>
      <h1>Hi from the App js</h1>
      <Outlet />
      <main>{/* <PartyList /> */}</main>
    </>
  );
}

export default App;
