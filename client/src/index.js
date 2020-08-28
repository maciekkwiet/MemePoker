import React from 'react';
import ReactDOM from 'react-dom';
import { SocketIOProvider } from 'socketio-hooks';

import './index.css';

import App from './App';
import { UserContextProvider } from 'Contexts/UserContext';
import { RoomContextProvider } from 'Contexts/RoomContext';

ReactDOM.render(
  <SocketIOProvider url="/">
    <RoomContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </RoomContextProvider>
  </SocketIOProvider>,
  document.getElementById('root')
);
