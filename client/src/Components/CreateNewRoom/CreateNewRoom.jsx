import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import VoteButton from 'Components/VoteButton/index.js';
import CreateNewRoomStyles from './CreateNewRoomStyles';
import { useRoomContext } from 'Contexts/RoomContext';

const CreateNewRoom = () => {
  const history = useHistory();
  const classes = CreateNewRoomStyles();
  const { setErrorMsg } = useRoomContext();

  const getRoomNumber = async () => {
    try {
      const currentRoom = await axios.post('/api/session');
      if (currentRoom.data?.room?.id) history.push(`/room/${currentRoom.data.room.id}/join`, { isAdmin: true });
      else {
        setErrorMsg(currentRoom.data);
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <div className={classes.buttonSession}>
        <VoteButton content={'START SESSION'} btnFunction={getRoomNumber}></VoteButton>
      </div>
    </>
  );
};

export default CreateNewRoom;
