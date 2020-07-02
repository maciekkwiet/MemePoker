import React, { useState, createContext } from 'react';
import axios from 'axios';

const RoomContext = createContext(); // create new context

const RoomContextProvider = ({ children }) => {
  const [response, setResponse] = useState(null); // create state

  const getData = async roomId => {
    const currentRoom = await axios.get(`/api/session?roomId=${roomId}`);
    setResponse(currentRoom.data);
  };
  return <RoomContext.Provider value={{ response, getData }}>{children}</RoomContext.Provider>;
};

export { RoomContextProvider, RoomContext };
