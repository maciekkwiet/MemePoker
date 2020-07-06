import React, { useState, useContext, createContext } from 'react';
import axios from 'axios';

const RoomContext = createContext(); // create new context

const RoomContextProvider = ({ children }) => {
  const [response, setResponse] = useState(null); // create state

  const getData = async roomId => {
    try {
      const currentRoom = await axios.get(`/api/session?roomId=${roomId}`);
      setResponse(currentRoom.data);
    } catch (e) {
      console.error(e);
    }
  };
  return <RoomContext.Provider value={{ response, getData }}>{children}</RoomContext.Provider>;
};
const useRoomContext = () => {
  const roomContext = useContext(RoomContext);
  return roomContext;
};

export { useRoomContext, RoomContextProvider, RoomContext };
