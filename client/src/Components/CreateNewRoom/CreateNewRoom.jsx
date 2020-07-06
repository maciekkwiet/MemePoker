import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import VoteButton from 'Components/VoteButton/index.js';
import CreateNewRoomStyles from './CreateNewRoomStyles';

const CreateNewRoom = () => {
  const history = useHistory();
  const classes = CreateNewRoomStyles();

  const getRoomNumber = async () => {
    try {
      const currentRoom = await axios.post('/api/session');
      history.push(`/room/${currentRoom.data.room.id}/join`, { isAdmin: true });
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
