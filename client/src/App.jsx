import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSocket } from 'socketio-hooks';
import { ThemeProvider } from '@material-ui/core';

import Home from 'views/Home';
import Room from 'views/Room';
import RoomJoin from 'views/RoomJoin';
import Template from 'Components/Template';
import theme from 'theme';

function App() {
  //Only for debug purposes
  useSocket('FEED', msg => console.log(msg));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
    </ThemeProvider>
  );
}

export default App;
