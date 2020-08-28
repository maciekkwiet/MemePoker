import React, { useState, useContext, createContext } from 'react';
import { useSocket } from 'socketio-hooks';
import useInterval from '../Utils/Converters/useInterval';

const RoomContext = createContext();

const RoomContextProvider = ({ children }) => {
  const [room, setRoom] = useState(null);
  const [hasEveryoneVoted, setHasEveryoneVoted] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [history, setHistory] = useState(room?.history);

  const handleClose = () => {
    setOpen(false);
  };

  useInterval(() => {
    if (isActive) setSeconds(seconds + 1);
  }, 1000);

  const reset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  const selectCard = id => {
    setSelectedCard(id);
  };

  useSocket('VOTES_CLEARED', () => {
    setSelectedCard(null);
  });

  useSocket('ESTIMATION_SUBMITTED', () => {
    setIsActive(false);
  });

  useSocket('TASK_ARCHIVED', task => {
    setRoom(room => {
      return { ...room, history: { ...room.history, task } };
    });
    // console.log('dupa22', task, room);
    // setHistory(task);
  });

  useSocket('USER_JOINED', users => {
    setRoom(room => {
      return { ...room, users };
    });
  });

  useSocket('USER_VOTED', userVoted => {
    const newUsers = room.users.map(user => (user.name === userVoted.name ? userVoted : user));
    return { ...room, newUsers };
  });
  useSocket('VOTES_CLEARED', users => {
    setOpen(false);
    setHasEveryoneVoted(false);
    setRoom(room => {
      return { ...room, users };
    });
  });
  useSocket('ROOM_VOTES', ({ votes, task }) => {
    setOpen(true);
    setHasEveryoneVoted(true);
    setRoom(room => {
      return { ...room, votes, task };
    });
  });

  useSocket('TASK_UPDATED', task => {
    reset();
    setIsActive(true);
    setRoom(() => {
      return { ...room, task };
    });
  });

  const updateRoomInfo = data => setRoom(data);
  return (
    <RoomContext.Provider
      value={{
        room,
        updateRoomInfo,
        hasEveryoneVoted,
        isActive,
        open,
        seconds,
        handleClose,
        selectCard,
        selectedCard,
        history,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};
const useRoomContext = () => {
  const roomContext = useContext(RoomContext);
  return roomContext;
};

export { useRoomContext, RoomContextProvider, RoomContext };
