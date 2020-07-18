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
import TaskEstimatedBox from 'Components/TaskEstimatedBox/TaskEstimatedBox.jsx';
const Room = () => {
  const classes = RoomStyles();
  const { getData } = useRoomContext(); // des. state from context
  const { getUserName } = useUserContext();
  const { roomId } = useParams();

  return (
    <MainBox>
      <TaskEstimatedBox />
    </MainBox>
  );
};

export default Room;
