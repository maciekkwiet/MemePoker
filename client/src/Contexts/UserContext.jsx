import React, { useState, useContext } from 'react';

const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const serializedToken = window.sessionStorage.getItem('TOKEN');

  const [token, setToken] = useState(serializedToken);

  const saveToken = token => {
    window.sessionStorage.setItem('TOKEN', token);
    setToken(token);
  };

  const getUser = () => {
    const { user } = JSON.parse(window.atob(token.split('.')[1]));
    return user;
  };

  return <UserContext.Provider value={{ token, saveToken, getUser }}>{children}</UserContext.Provider>;
};

const useUserContext = () => {
  const userContext = useContext(UserContext);
  return userContext;
};

export { useUserContext, UserContextProvider, UserContext };
