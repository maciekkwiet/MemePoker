import React from 'react';
import { Box, Typography, Avatar } from '@material-ui/core';

import users from './users';
import UserVotesStyles from './UserVotesStyles';

const UserVotes = () => {
  const classes = UserVotesStyles();

  return (
    <Box className={classes.root}>
      {users.map((user) => (
        <Box key={user.userName} className={classes.item}>
          <Box className={classes.userInfo}>
            <Avatar>{user.userName.charAt(0).toUpperCase()}</Avatar>
            <Typography>{user.userName}</Typography>
          </Box>
          <Box>
            <Typography>{user.voteValue}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default UserVotes;
