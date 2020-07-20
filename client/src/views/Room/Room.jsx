import React, { useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Grid, Paper, Box } from '@material-ui/core';
import Cards from 'Components/Cards';
import { useUserContext } from 'Contexts/UserContext';
import RoomStyles from './RoomStyles';
import TaskNameInput from 'Components/TaskNameInput';
import InfoBox from 'Components/InfoBox';
import UserBox from 'Components/UserBox';
import MainBox from 'Components/MainBox';
import Results from 'Components/Results';
import Timer from 'Components/Timer';
import { useRoomContext } from 'Contexts/RoomContext';
import Navigation from 'Components/Navigation';
import TaskEstimatedBox from 'Components/TaskEstimatedBox';

const Room = () => {
  const classes = RoomStyles();
  const { getData } = useRoomContext(); // des. state from context
  const { getUserName } = useUserContext();
  const { roomId } = useParams();

  useEffect(() => {
    getData(roomId);
  }, []);

  if (!getUserName(roomId)) return <Redirect to={`/room/${roomId}/join`} />;

  return (
    <MainBox>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} className={classes.main}>
          <Navigation />
          <Box className={classes.top} component="div">
            <UserBox />
            <Timer />
            <InfoBox title="ROOM ID" value={roomId} padding={0.25} />
          </Box>
          <Paper className={classes.cards}>
            <TaskNameInput />
            <Cards />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Results />
        </Grid>
      </Grid>
      <TaskEstimatedBox />
    </MainBox>
  );
};

export default Room;
