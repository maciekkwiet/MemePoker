import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const RoomContext = createContext(); // create new context

const RoomContextProvider = ({ children }) => {
  const [response, setResponse] = useState(null); // create state

  const getData = async () => {
    const currentRoom = await axios.post('/api/session');
    setResponse(currentRoom.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return <RoomContext.Provider value={{ response }}>{children}</RoomContext.Provider>;
};

export { RoomContextProvider, RoomContext };
