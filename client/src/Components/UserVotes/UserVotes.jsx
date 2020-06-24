import React, { useState } from 'react';
import { Box, Typography, Avatar } from '@material-ui/core';

import UserVotesStyles from './UserVotesStyles';
import { useSocket } from 'socketio-hooks';

const UserVotes = () => {
  const classes = UserVotesStyles();
  const [users, setUsers] = useState([]);

  useSocket('USER_JOINED', users => {
    setUsers(users);
  });

  return (
    <Box className={classes.root}>
      {users.map(user => (
        <Box key={user.name} className={classes.item}>
          <Box className={classes.userInfo}>
            <Avatar>{user.name.charAt(0).toUpperCase()}</Avatar>
            <Typography>{user.name}</Typography>
          </Box>
          <Box>
            <Typography>{user.vote}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default UserVotes;
