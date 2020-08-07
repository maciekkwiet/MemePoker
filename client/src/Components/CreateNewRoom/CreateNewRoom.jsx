import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import VoteButton from 'Components/VoteButton/index.js';
import CreateNewRoomStyles from './CreateNewRoomStyles';
import Loader from 'Components/Loader/Loader';

const CreateNewRoom = () => {
  const history = useHistory();
  const classes = CreateNewRoomStyles();

  const [isLoading, setIsLoading] = useState(false);

  const getRoomNumber = async () => {
    setIsLoading(true);
    try {
      const currentRoom = await axios.post('/api/session');
      setIsLoading(false);
      history.push(`/room/${currentRoom.data.room.id}/join`, { isAdmin: true });
    } catch (e) {
      console.error(e);
    }
  };

  if (isLoading) return <Loader text="Loading..." />;

  return (
    <>
      <div className={classes.buttonSession}>
        <VoteButton content={'START SESSION'} btnFunction={getRoomNumber}></VoteButton>
      </div>
    </>
  );
};

export default CreateNewRoom;
