import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import Main from "./views/Main/Main";

function App() {
  console.log(dskfnkdsfn);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/room/:roomId">
          <Main />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
