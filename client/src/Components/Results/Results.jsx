import React, { useState } from 'react';
import { Paper, Typography, Box } from '@material-ui/core';
import { useEmit } from 'socketio-hooks';
import { useParams } from 'react-router-dom';

import { useUserContext } from 'Contexts/UserContext';
import UserVotes from 'Components/UserVotes';
import VoteBtn from 'Components/VoteButton';
import ResultsStyles from './ResultsStyles';
import { useSocket } from 'socketio-hooks';

const Results = () => {
  const [test, SetTest] = useState();

  const classes = ResultsStyles();
  const { roomId } = useParams();
  const sendVotesShow = useEmit('SHOW_VOTES');
  const sendVotesClear = useEmit('CLEAR_VOTES');
  const { getUser } = useUserContext();
  const { isAdmin } = getUser(roomId);

  const onClickHandlerShow = () => {
    sendVotesShow(roomId);
  };

  useSocket('ROOM_VOTES', user => {
    console.log('DUPA', user);
    SetTest(user);
    console.log('dupa2', user[0]);
  });

  const onClickHandlerClear = () => {
    sendVotesClear(roomId);
  };

  return (
    <Paper className={classes.root}>
      <Typography className={classes.header} component="div" variant="h5">
        TEST
      </Typography>
      <UserVotes />
      {isAdmin && (
        <Box className={classes.btnWrap}>
          <VoteBtn content="Show votes" btnFunction={onClickHandlerShow} />
          <VoteBtn content="Clear votes" btnFunction={onClickHandlerClear} />
        </Box>
      )}
    </Paper>
  );
};

export default Results;
