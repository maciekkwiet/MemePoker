import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import VoteButton from 'Components/VoteButton/index.js';
import CreateNewRoomStyles from './CreateNewRoomStyles';
import Loader from 'Components/Loader/Loader';
import ExceptionBox from 'Components/ExceptionBox/ExceptionBox';

const CreateNewRoom = () => {
  const history = useHistory();
  const classes = CreateNewRoomStyles();

  const [isException, setIsException] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getRoomNumber = async () => {
    setIsException(false);
    setIsLoading(true);
    try {
      const currentRoom = await axios.post('/api/session');
      setIsLoading(false);
      history.push(`/room/${currentRoom.data.room.id}/join`, { isAdmin: true });
    } catch (e) {
      console.error(e);
      setIsException(true);
    }
  };

  return (
    <>
      <div className={classes.buttonSession}>
        <VoteButton content={'START SESSION'} btnFunction={getRoomNumber}></VoteButton>
        {isException && <ExceptionBox content="Error: Not enough rooms" isOpen={isException} />}
        {isLoading && <Loader text="Loading..." />}
      </div>
    </>
  );
};

export default CreateNewRoom;
