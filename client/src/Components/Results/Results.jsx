import React from 'react';
import { Paper, Typography, Box } from '@material-ui/core';

import { useBackend } from 'hooks/useBackend';
import { useUserContext } from 'Contexts/UserContext';
import UserVotes from 'Components/UserVotes';
import VoteBtn from 'Components/VoteButton';
import ResultsStyles from './ResultsStyles';

const Results = () => {
  const classes = ResultsStyles();
  const sendVotesShow = useBackend('SHOW_VOTES');
  const sendVotesClear = useBackend('CLEAR_VOTES');
  const { getUser } = useUserContext();
  const { isAdmin } = getUser();

  const onClickHandlerShow = () => {
    sendVotesShow();
  };

  const onClickHandlerClear = () => {
    sendVotesClear();
  };

  return (
    <Paper className={classes.root}>
      <Typography className={classes.header} component="div" variant="h5">
        Results
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
