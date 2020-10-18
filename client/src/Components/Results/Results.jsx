import React from 'react';
import { Paper, Typography, Box, useMediaQuery, Chip } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ClearAllIcon from '@material-ui/icons/ClearAll';

import { useBackend } from 'hooks/useBackend';
import { useUserContext } from 'Contexts/UserContext';
import UserVotes from 'Components/UserVotes';
import VoteBtn from 'Components/VoteButton';
import ResultsStyles from './ResultsStyles';

const Results = () => {
  const classes = ResultsStyles();
  const sendVotesShow = useBackend('SHOW_VOTES');
  const sendVotesClear = useBackend('CLEAR_VOTES');
  const { isAdmin } = useUserContext().user;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  // const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const isDesktop = !isMobile;

  const onClickHandlerShow = () => {
    sendVotesShow();
  };

  const onClickHandlerClear = () => {
    sendVotesClear();
  };

  return (
    <>
      {isDesktop && (
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
      )}

      {isMobile && (
        <>
          <Box className={classes.fixedButtons}>
            {isAdmin && (
              <>
                <Chip color="primary" onClick={onClickHandlerShow} label="Show" icon={<VisibilityIcon />} />
                <Chip color="primary" onClick={onClickHandlerClear} label="Clear" icon={<ClearAllIcon />} />
              </>
            )}
            <UserVotes />
          </Box>
        </>
      )}
    </>
  );
};

export default Results;
