import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSocket } from 'socketio-hooks';

import Home from 'views/Home';
import Room from 'views/Room';
import RoomJoin from 'views/RoomJoin';
import Template from 'Components/Template';

function App() {
  //Only for debug purposes
  useSocket('FEED', msg => console.log(msg));

  return (
    <BrowserRouter>
      <Template>
        <Switch>
          <Route path="/room/:roomId/join">
            <RoomJoin />
          </Route>
          <Route path="/room/:roomId">
            <Room />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Template>
    </BrowserRouter>
  );
}

export default App;
