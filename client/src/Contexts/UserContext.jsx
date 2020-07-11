import React, { useState, useContext } from 'react';

const UserContext = React.createContext();
const UserContextProvider = ({ children }) => {
  const serializedName = window.localStorage.getItem('DEFAULT_NAME') ?? '';
  const serializedUserRooms = JSON.parse(window.sessionStorage.getItem('USER_ROOMS') ?? '[]');

  const [defaultName, setDefaultName] = useState(serializedName);
  const [userRooms, setUserRooms] = useState(serializedUserRooms);

  const changeDefaultName = newName => {
    window.localStorage.setItem('DEFAULT_NAME', newName);
    setDefaultName(newName);
  };

  const upsertRoomInfo = (roomId, name, isAdmin) => {
    const room = userRooms.find(room => room.roomId === roomId);

    const newUserRooms = [...userRooms];
    if (room) {
      room.name = name;
      room.isAdmin = !!room.isAdmin;
    } else {
      newUserRooms.push({ roomId, name, isAdmin });
    }

    changeDefaultName(name);
    setUserRooms(newUserRooms);
    window.sessionStorage.setItem('USER_ROOMS', JSON.stringify(newUserRooms));
  };

  const getUserName = roomId => userRooms.find(room => room.roomId === roomId)?.name;
  const getUser = roomId => userRooms.find(room => room.roomId === roomId);

  const contextValue = { defaultName, upsertRoomInfo, getUser, getUserName, userRooms };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

const useUserContext = () => {
  const userContext = useContext(UserContext);
  return userContext;
};

export { useUserContext, UserContextProvider, UserContext };
