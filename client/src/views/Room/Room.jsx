import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Container, Grid, Typography, CssBaseline, Paper, Button, Avatar, Box } from '@material-ui/core';

import Cards from 'Components/Cards';
import { useUserContext } from 'Contexts/UserContext';
import roomStyles from './RoomStyles';
import TaskNameInput from './TaskNameInput';
import InfoBox from './InfoBox';
import UserVotes from './UserVotes';

const Room = () => {
  const classes = roomStyles();

  const { name } = useUserContext();
  const { roomId } = useParams();

  if (!name) return <Redirect to={`/room/${roomId}/join`} />;

  return (
    <Container fixed>
      <CssBaseline />
      <Grid container spacing={8} className={classes.grid}>
        <Grid container item md={8} className={classes.main}>
          <Grid container item xs={12} className={classes.mainTop}>
            <Grid item sm={10} className={classes.mainTopBox}>
              <Avatar className={classes.avatarLarge}>{name.charAt(0).toUpperCase()}</Avatar>
              <Paper elevation={0} className={classes.mainTopBoxPaper} variant="outlined">
                <Typography display="block" variant="h6">
                  CHOOSE A MEME!
                </Typography>
                <Typography display="block" variant="subtitle2">
                  You have to choose only one card! Do it quickly :D
                </Typography>
              </Paper>
            </Grid>
            <Grid item sm={2} className={classes.mainTopInfoBoxes}>
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
              <Grid container>
                <Typography variant="h5">Results</Typography>
                <UserVotes />
                <Box className={classes.resultsBtnWrap} mt="auto">
                  <Button variant="contained" color="primary" fullWidth>
                    Show votes
                  </Button>
                  <Button variant="contained" color="primary" fullWidth>
                    Clear votes
                  </Button>
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
