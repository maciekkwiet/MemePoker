import React from 'react';
import { Paper, Typography, Box } from '@material-ui/core';
import { useEmit } from 'socketio-hooks';
import { useParams } from 'react-router-dom';

import UserVotes from 'Components/UserVotes';
import VoteBtn from 'Components/VoteButton';
import ResultsStyles from './ResultsStyles';
import { useUserContext } from 'Contexts/UserContext';

const Results = () => {
  const classes = ResultsStyles();
  const { roomId } = useParams();
  const { userRooms } = useUserContext();
  const sendVotes = useEmit('SHOW_VOTES');

  const onClickHandler = () => {
    sendVotes(roomId);
    console.log({ userRooms });
    console.log({ roomId });
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
