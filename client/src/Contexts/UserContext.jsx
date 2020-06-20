import React, { useState, useContext } from 'react';

const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const serializedName = window.localStorage.getItem('DEFAULT_NAME') ?? '';
  const serializedUserRooms = JSON.parse(window.localStorage.getItem('USER_ROOMS') ?? '[]');

  const [defaultName, setDefaultName] = useState(serializedName);
  const [userRooms, setUserRooms] = useState(serializedUserRooms);

  const changeDefaultName = (newName) => {
    window.localStorage.setItem('DEFAULT_NAME', newName);
    setDefaultName(newName);
  };

  const changeRoom = (roomId, name, isAdmin = false) => {
    const room = userRooms.find((room) => room.roomId === roomId);

    let newUserRooms;
    if (room) {
      room.name = name;
      room.isAdmin = !!room.isAdmin;
      newUserRooms = [...userRooms];
    } else {
      newUserRooms = [...userRooms, { roomId, name, isAdmin }];
    }
    window.localStorage.setItem('USER_ROOMS', JSON.stringify(newUserRooms));
    setUserRooms(newUserRooms);
  };

  const changeName = (name = '', roomId) => {
    changeRoom(roomId, name);
    changeDefaultName(name);
  };

  const isUserAdminInTheRoom = (roomId) => userRooms.some((room) => room.roomId === roomId);

  const setAsAdmin = (roomId) => {
    changeRoom(roomId, defaultName, true);
  };

  const contextValue = { defaultName, userRooms, setAsAdmin, changeName, isUserAdminInTheRoom };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

const useUserContext = () => {
  const userContext = useContext(UserContext);
  return userContext;
};

export { useUserContext, UserContextProvider, UserContext };
