import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Container, Grid, Typography, CssBaseline, Paper, TextField, Button, Avatar } from '@material-ui/core';

import Cards from 'Components/Cards';
import { useUserContext } from 'Contexts/UserContext';
import roomStyles from './RoomStyles';

const Room = () => {
  const classes = roomStyles();

  const { name } = useUserContext();
  const { roomId } = useParams();

  if (!name) return <Redirect to={`/room/${roomId}/join`} />;

  return (
    <Container fixed>
      <CssBaseline />
      <Grid container spacing={6} className={classes.grid}>
        <Grid container item sm={8} className={classes.main}>
          <Grid container item xs={12} className={classes.mainTop}>
            <Paper elevation={0} className={classes.userName} variant="outlined">
              <Avatar>H</Avatar>
            </Paper>
            <Button variant="contained" color="primary" size="small" fullWidth>
              Show votes
            </Button>
            <TextField variant="outlined" label="Task name" fullWidth />
            <Button variant="contained" color="secondary" size="small" fullWidth>
              Clear votes
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.cards}>
              Main View <br /> <Cards />
            </Paper>
          </Grid>
        </Grid>
        <Grid container item sm={4}>
          <Grid item xs={12}>
            <Paper className={classes.results}>
              <Grid container>
                <Typography variant="h5">Results</Typography>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Room;

/* 
template (header, footer)
  main
    (userInfo
    taskInput
    cards)
    (results)
*/
