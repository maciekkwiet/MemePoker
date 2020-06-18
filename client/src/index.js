import React from 'react';
import ReactDOM from 'react-dom';
import { SocketIOProvider } from 'socketio-hooks';
import { ThemeProvider } from '@material-ui/core/styles';

import './index.css';
import theme from './theme';

import App from './App';
import { UserContextProvider } from 'Contexts/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <SocketIOProvider url="/">
          <App />
        </SocketIOProvider>
      </UserContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
