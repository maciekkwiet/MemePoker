import React from 'react';
import { Avatar, Paper, Typography } from '@material-ui/core';

import { useUserContext } from 'Contexts/UserContext';
import UserBoxStyles from './UserBoxStyles';

const UserBox = ({ title, value }) => {
  const { name } = useUserContext();
  const classes = UserBoxStyles();

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatarLg}>{name.charAt(0).toUpperCase()}</Avatar>
      <Paper elevation={0} className={classes.paper} variant="outlined">
        <Typography display="block" variant="h6">
          {title}
        </Typography>
        <Typography display="block" variant="subtitle2">
          {value}
        </Typography>
      </Paper>
    </div>
  );
};

export default UserBox;
