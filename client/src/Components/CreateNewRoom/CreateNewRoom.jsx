import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@material-ui/core';

import VoteButton from 'Components/VoteButton/index.js';
import CreateNewRoomStyles from './CreateNewRoomStyles';

const CreateNewRoom = () => {
  const [roomNumber, setroomNumber] = useState(null);
  const classes = CreateNewRoomStyles();
  const CreateNewRoom = async () => {
    try {
      console.log('1');
      const posttest = await axios.get('api/session');
      setroomNumber(posttest.id);
    } catch (ex) {
      console.error(ex);
    }
  };

  return (
    <>
      <Link to={`/room/${roomNumber}/join`} style={{ textDecoration: 'none' }}>
        <div className={classes.buttonSession}>
          <Button
            className={classes.root}
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            onClick={() => {
              CreateNewRoom();
            }}
          >
            TEST
          </Button>
        </div>
      </Link>
    </>
  );
};

export default CreateNewRoom;
