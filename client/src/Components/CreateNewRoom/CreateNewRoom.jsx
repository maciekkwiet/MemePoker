import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import VoteButton from 'Components/VoteButton/index.js';
import CreateNewRoomStyles from './CreateNewRoomStyles';
import ErrorProp from 'Components/ErrorBox/ErrorProp';

const CreateNewRoom = () => {
  const history = useHistory();
  const classes = CreateNewRoomStyles();
  const [error, setError] = useState(false);

  const getRoomNumber = async () => {
    setError(false);
    try {
      const currentRoom = await axios.post('/api/session');
      history.push(`/room/${currentRoom.data.room.id}/join`, { isAdmin: true });
    } catch (e) {
      console.error(e);
      setError(true);
    }
  };
  return (
    <>
      <div className={classes.buttonSession}>
        <VoteButton content={'START SESSION'} btnFunction={getRoomNumber}></VoteButton>
        {error && <ErrorProp content="Error: Not enough rooms" isOpen={error} />}
      </div>
    </>
  );
};

export default CreateNewRoom;
