import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Grid, Paper, Box } from '@material-ui/core';

import RoomStyles from './RoomStyles';
import Cards from 'Components/Cards';
import TaskNameInput from 'Components/TaskNameInput';
import InfoBox from 'Components/InfoBox';
import UserBox from 'Components/UserBox';
import MainBox from 'Components/MainBox';
import Results from 'Components/Results';
import Timer from 'Components/Timer';
import Navigation from 'Components/Navigation';
import TaskEstimatedBox from 'Components/TaskEstimatedBox';
import { useRoomContext } from 'Contexts/RoomContext';
import { useUserContext } from 'Contexts/UserContext';
import { useBackend } from 'hooks/useBackend';

const Room = () => {
  const classes = RoomStyles();
  const { token } = useUserContext();
  const { room, updateRoomInfo } = useRoomContext();
  const { roomId } = useParams();
  const reconnectUser = useBackend('USER_RECONNECT');

  if (!room && token) {
    reconnectUser({ token }, data => updateRoomInfo(data));
    return <p>Reconnecting...</p>;
  } else if (!room) {
    return <Redirect to={`/room/${roomId}/join`} />;
  }

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
