import React, { useState, useContext } from 'react';

const UserContext = React.createContext();

const getUserFromToken = token => {
  try {
    return JSON.parse(window.atob(token.split('.')[1])).user;
  } catch (ex) {
    console.error('Error deserializing token', ex);
    return null;
  }
};

const UserContextProvider = ({ children }) => {
  const serializedToken = window.sessionStorage.getItem('TOKEN');
  const initialUser = serializedToken ? getUserFromToken(serializedToken) : null;

  const [token, setToken] = useState(serializedToken);
  const [user, setUser] = useState(initialUser);

  const saveToken = token => {
    window.sessionStorage.setItem('TOKEN', token);
    setUser(getUserFromToken(token));
    setToken(token);
  };

  return <UserContext.Provider value={{ token, user, saveToken }}>{children}</UserContext.Provider>;
};

const useUserContext = () => {
  const userContext = useContext(UserContext);
  return userContext;
};

export { useUserContext, UserContextProvider, UserContext };
