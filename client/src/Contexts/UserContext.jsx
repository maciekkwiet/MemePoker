import React, { useState, useContext } from 'react';
const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const defaultName = window.localStorage.getItem('USERNAME') ?? '';

  const [name, setName] = useState(defaultName);
  const [admins, setAdmin] = useState([{ isAdmin: false, adminroomId: ' ', name: null }]);

  const changeName = (newName = '', roomId) => {
    const existroom = admins.find((admin) => admin.adminroomId === roomId);
    if (existroom?.isAdmin) {
      CheckRoom(newName, roomId);
    } else {
      setName(newName);
    }
  };
  const CheckRoom = (Newname, roomId) => {
    const ChangeAdmin = admins.find((admin) => admin.adminroomId === roomId);
    ChangeAdmin.name = Newname;
  };

  const addAdmin = (isAdmin = false, adminroomId = null, name = ' ') => {
    admins.map((admin) => {
      if (admin.adminroomId !== adminroomId) {
        setAdmin([...admins, { isAdmin, adminroomId, name }]);
      } else {
        // el.adminroomId = adminroomId;
        console.log('this room is occupied');
      }
    });
  };

  return <UserContext.Provider value={{ name, changeName, admins, addAdmin }}>{children}</UserContext.Provider>;
};

const useUserContext = () => {
  const userContext = useContext(UserContext);
  return userContext;
};

export { useUserContext, UserContextProvider, UserContext };
