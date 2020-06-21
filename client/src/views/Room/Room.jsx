import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Container, Grid, Typography, CssBaseline, Paper, Box } from '@material-ui/core';

import Cards from 'Components/Cards';
import { useUserContext } from 'Contexts/UserContext';
import roomStyles from './RoomStyles';
import TaskNameInput from 'Components/TaskNameInput';
import InfoBox from 'Components/InfoBox';
import UserVotes from 'Components/UserVotes';
import VoteBtn from 'Components/VoteButton';
import UserBox from 'Components/UserBox';

const Room = () => {
  const classes = roomStyles();

  const { name } = useUserContext();
  const { roomId } = useParams();

  if (!name) return <Redirect to={`/room/${roomId}/join`} />;

  return (
    <Container fixed>
      <CssBaseline />
      <Grid container spacing={5} className={classes.grid}>
        <Grid container item md={8} className={classes.main}>
          <Grid container item xs={12} className={classes.mainTop}>
            <Grid item sm={10}>
              <UserBox />
            </Grid>
            <Grid item container sm={2} className={classes.mainTopInfoBoxes}>
              <InfoBox title="Timer" value="00:22:33" />
              <InfoBox title="Room ID" value={roomId} />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.cards}>
              <Box mb={2}>
                <TaskNameInput />
              </Box>
              <Cards />
            </Paper>
          </Grid>
        </Grid>
        <Grid container item md={4}>
          <Grid item xs={12}>
            <Paper className={classes.results}>
              <Grid item container>
                <Typography className={classes.resultsHeader} component="div" variant="h5">
                  Results
                </Typography>
                <UserVotes />
                <Box className={classes.resultsBtnWrap}>
                  <VoteBtn content="Show votes" />
                  <VoteBtn content="Clear votes" />
                </Box>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Room;
