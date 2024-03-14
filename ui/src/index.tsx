import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Auth0Provider
        domain="dev-lzo7qonm14nqgkbj.uk.auth0.com"
        clientId="SXSr4nFnjSIAPCOSDVVjOstuGx0un6EN"
        authorizationParams={{
          redirect_uri: "http://flatfish-frontend.pq46c.icekube.ics.cloud/home",
        }}
      >
        <App />
      </Auth0Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
