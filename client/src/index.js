import React from 'react';
import ReactDOM from 'react-dom';
import { SocketIOProvider } from 'socketio-hooks';

import './index.css';

import App from './App';
import { UserContextProvider } from 'Contexts/UserContext';
import Template from 'Components/Template';

ReactDOM.render(
  <React.StrictMode>
    <Template>
      <UserContextProvider>
        <SocketIOProvider url="/">
          <App />
        </SocketIOProvider>
      </UserContextProvider>
    </Template>
  </React.StrictMode>,
  document.getElementById('root')
);
