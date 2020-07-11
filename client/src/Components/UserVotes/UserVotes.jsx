import React, { useState } from 'react';
import { Box, Typography, Avatar } from '@material-ui/core';

import UserVotesStyles from './UserVotesStyles';
import { useSocket } from 'socketio-hooks';

const UserVotes = () => {
  const classes = UserVotesStyles();
  const [users, setUsers] = useState([]);
  const [hasEveryoneVoted, setHasEveryoneVoted] = useState(false);

  useSocket('USER_JOINED', users => {
    setUsers(users);
  });
  useSocket('USER_VOTED', userVoted => {
    const newUsers = users.map(x => {
      return x.name === userVoted.name ? userVoted : x;
    });
    setUsers(newUsers);
  });
  useSocket('CARDS_REVEALED', users => {
    setHasEveryoneVoted(true);
    setUsers(users);
  });
  useSocket('CLEAR_VOTES', users => {
    setHasEveryoneVoted(false);
    setUsers(users);
  });

  return (
    <Box className={classes.root}>
      {users.map(user => (
        <Box key={user.name} className={classes.item}>
          <Box className={user.vote ? classes.userInfoVoted : classes.userInfo}>
            <Avatar>{user.name.charAt(0).toUpperCase()}</Avatar>
            <Typography>{user.vote ? <b>{user.name} - [Voted]</b> : user.name}</Typography>
          </Box>
          <Box>
            <Typography>{hasEveryoneVoted ? user.vote : ''}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default UserVotes;
