import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./styles/index.scss";
import App from "./routes/App";
import "./routes/RootLayout/RootLayout";
import RootLayout from "./routes/RootLayout/RootLayout";
import PartyList from "./routes/RootLayout/landing/PartyList";
import GuestList, { loader as guestInfoLoader, action as addGuestAction } from "./routes/RootLayout/guest-list/GuestList";
import AddGuest  from './routes/RootLayout/add-guest/AddGuest'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/party-list",
        element: <PartyList />,
      },
      {
        path: "/guest-list",
        element: <GuestList />,
        loader: guestInfoLoader,
        action: addGuestAction,
        children: [
          {
            path: "add-guest",
            element: <AddGuest />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
