import React from 'react';
import ReactDOM from 'react-dom';
import { SocketIOProvider } from 'socketio-hooks';

import './index.css';

import App from './App';
import { UserContextProvider } from 'Contexts/UserContext';
import { RoomContextProvider } from 'Contexts/RoomContext';

ReactDOM.render(
  // <React.StrictMode>
  <RoomContextProvider>
    <UserContextProvider>
      <SocketIOProvider url="/">
        <App />
      </SocketIOProvider>
    </UserContextProvider>
  </RoomContextProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
