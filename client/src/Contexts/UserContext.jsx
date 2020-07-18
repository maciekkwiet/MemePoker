import React, { useState, useContext } from 'react';

const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const serializedName = window.localStorage.getItem('DEFAULT_NAME') ?? '';
  const serializedToken = window.sessionStorage.getItem('TOKEN');

  const [defaultName, setDefaultName] = useState(serializedName);
  const [token, setToken] = useState(serializedToken);

  const changeDefaultName = newName => {
    window.localStorage.setItem('DEFAULT_NAME', newName);
    setDefaultName(newName);
  };

  const saveToken = token => {
    window.sessionStorage.setItem('TOKEN', token);
    setToken(token);
  };

  const getUserName = () => serializedName;

  const getUser = () => true;

  return (
    <UserContext.Provider value={{ defaultName, token, saveToken, changeDefaultName, getUser, getUserName }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  const userContext = useContext(UserContext);
  return userContext;
};

export { useUserContext, UserContextProvider, UserContext };
