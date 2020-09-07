import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Grid, Paper, Box, useTheme, useMediaQuery } from '@material-ui/core';

import RoomStyles from './RoomStyles';
import Cards from 'Components/Cards';
import TaskNameInput from 'Components/TaskNameInput';
import InfoBox from 'Components/InfoBox';
import TaskBox from 'Components/TaskBox';
import MainBox from 'Components/MainBox';
import Results from 'Components/Results';
import Timer from 'Components/Timer';
import Navigation from 'Components/Navigation';
import TaskEstimatedBox from 'Components/TaskEstimatedBox';
import { useRoomContext } from 'Contexts/RoomContext';
import { useUserContext } from 'Contexts/UserContext';
import { useBackend } from 'hooks/useBackend';
import Loader from 'Components/Loader/Loader';

const Room = () => {
  const classes = RoomStyles();
  const { token } = useUserContext();
  const { room, updateRoomInfo } = useRoomContext();
  const { roomId } = useParams();
  const reconnectUser = useBackend('USER_RECONNECT');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const isDesktop = !isMobile;

  if (!room && token) {
    reconnectUser({ token }, data => updateRoomInfo(data));
    return <Loader text="Reconnecting..." />;
  } else if (!room) {
    return <Redirect to={`/room/${roomId}/join`} />;
  }

  return (
    <MainBox padding={2}>
      <Grid container spacing={3}>
        <Grid item sm={12} md={8} className={classes.main}>
          <Navigation />
          <Box className={classes.top} component="div">
            <TaskBox />
            <Timer />
            <InfoBox title="ROOM&nbsp;ID" value={roomId} padding={0.25} />
          </Box>
          <Paper className={classes.cards}>
            <TaskNameInput />
            <Cards />
          </Paper>
        </Grid>
        {isDesktop ? (
          <Grid item sm={12} md={4}>
            <Results />
          </Grid>
        ) : (
          <Results />
        )}
      </Grid>
      <TaskEstimatedBox />
    </MainBox>
  );
};

export default Room;
