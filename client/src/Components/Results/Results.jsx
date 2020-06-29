import React from 'react';
import { Paper, Typography, Box } from '@material-ui/core';

import UserVotes from 'Components/UserVotes';
import VoteBtn from 'Components/VoteButton';
import ResultsStyles from './ResultsStyles';

const Results = () => {
  const classes = ResultsStyles();

  return (
    <Paper className={classes.root}>
      <Typography className={classes.header} component="div" variant="h5">
        Results
      </Typography>
      <UserVotes />
      <Box className={classes.btnWrap}>
        <VoteBtn content="Show votes" />
        <VoteBtn content="Clear votes" />
      </Box>
    </Paper>
  );
};

export default Results;
