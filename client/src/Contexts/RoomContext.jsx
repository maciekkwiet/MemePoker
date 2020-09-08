import React, { useState, useContext, createContext } from 'react';

const RoomContext = createContext();

const RoomContextProvider = ({ children }) => {
  const [room, setRoom] = useState(null);
  const [errorMsg, setErrorMsg] = useState(undefined);

  const updateRoomInfo = data => setRoom(data);

  return (
    <RoomContext.Provider value={{ room, updateRoomInfo, errorMsg, setErrorMsg }}>{children}</RoomContext.Provider>
  );
};
const useRoomContext = () => {
  const roomContext = useContext(RoomContext);
  return roomContext;
};

export { useRoomContext, RoomContextProvider, RoomContext };
