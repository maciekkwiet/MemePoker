import React from 'react';
import { Avatar, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useUserContext } from 'Contexts/UserContext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    border: 'none',
  },
  paper: {
    padding: theme.spacing(1),
    border: `2px solid ${theme.palette.primary.main}`,
  },
  avatarLg: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginRight: theme.spacing(2),
  },
}));

const UserBox = () => {
  const { name } = useUserContext();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatarLg}>{name.charAt(0).toUpperCase()}</Avatar>
      <Paper elevation={0} className={classes.paper} variant="outlined">
        <Typography display="block" variant="h6">
          CHOOSE A MEME!
        </Typography>
        <Typography display="block" variant="subtitle2">
          You have to choose only one card! Do it quickly :D
        </Typography>
      </Paper>
    </div>
  );
};

export default UserBox;
