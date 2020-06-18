import React, { useState, useContext } from 'react';
const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const defaultName = window.localStorage.getItem('USERNAME') ?? '';

  const [name, setName] = useState(defaultName);
  const [admins, setAdmin] = useState([{ adminExist: false, adminroomId: ' ', name: '' }]);

  const changeAdminName = (Newname, roomId) => {
    const changeAdmin = admins.find((admin) => admin.adminroomId === roomId);
    changeAdmin.name = Newname;
  };

  const changeName = (newName = '', roomId) => {
    const existroom = admins.find((admin) => admin.adminroomId === roomId);
    if (existroom?.adminExist) {
      changeAdminName(newName, roomId);
    } else {
      setName(newName);
    }
  };

  const addAdmin = (adminExist = false, adminroomId = null, name = ' ') => {
    admins.map((admin) => {
      if (admin.adminroomId !== adminroomId) {
        setAdmin([...admins, { adminExist, adminroomId, name }]);
      } else {
        // el.adminroomId = adminroomId;
        console.log('This room is occupied');
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
