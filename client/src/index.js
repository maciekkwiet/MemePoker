import React from "react";
import ReactDOM from "react-dom";
import { SocketIOProvider } from "socketio-hooks";

import "./index.css";

import App from "./App";

ReactDOM.render(
  <SocketIOProvider
    url="http://localhost:4000/"
    // namespaces={["feed", "chat"]}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SocketIOProvider>,
  document.getElementById("root")
);
