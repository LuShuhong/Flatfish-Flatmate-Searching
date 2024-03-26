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
          redirect_uri: "https://flatfish-frontend.pq46c.icekube.ics.cloud/signup",
          // redirect_uri: "https://flatfish-frontend.pq46c.icekube.ics.cloud/signup",
          // redirect_uri: "http://localhost:3000/signup",
          audience: "https://flatfish-backend.pq46c.icekube.ics.cloud/api/v1",
          // redirect_uri: "http://localhost:8080/api/v1",
          // https://flatfish-backend.pq46c.icekube.ics.cloud/api/v1/
          // scope: "read:current_user update:current_user_metadata",
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
