import React from 'react';
import { useUserContext } from 'Contexts/UserContext';
import { Paper, Typography, Box } from '@material-ui/core';
import { useEmit } from 'socketio-hooks';
import { useParams } from 'react-router-dom';

import UserVotes from 'Components/UserVotes';
import VoteBtn from 'Components/VoteButton';
import ResultsStyles from './ResultsStyles';

const Results = () => {
  const classes = ResultsStyles();
  const { roomId } = useParams();
  const { userRooms } = useUserContext();
  const sendVotes = useEmit('SHOW_VOTES');

  const onClickHandler = () => {
    userRooms.forEach(room => {
      if (room.roomId === roomId && room.isAdmin === true) {
        sendVotes(roomId);
      }
    });
  };

  return (
    <Paper className={classes.root}>
      <Typography className={classes.header} component="div" variant="h5">
        Results
      </Typography>
      <UserVotes />
      <Box className={classes.btnWrap}>
        <VoteBtn content="Show votes" btnFunction={onClickHandler} />
        <VoteBtn content="Clear votes" />
      </Box>
    </Paper>
  );
};

export default Results;
