import React, { useState } from 'react';
import { Box, Typography, Avatar } from '@material-ui/core';

import UserVotesStyles from './UserVotesStyles';
import { useSocket } from 'socketio-hooks';

const UserVotes = () => {
  const classes = UserVotesStyles();
  const [users, setUsers] = useState([]);
  const [usersVoted, setUserVoted] = useState([]);

  // const users = [
  //   {
  //     name: 'user01',
  //     vote: '1234',
  //   },
  //   {
  //     name: 'user02',
  //     vote: '1234',
  //   },
  //   {
  //     name: 'user03',
  //     vote: '1234',
  //   },
  //   {
  //     name: 'user04',
  //     vote: '1234',
  //   },
  //   {
  //     name: 'user05',
  //     vote: '1234',
  //   },
  // ];

  // const usersVoted = [
  //   {
  //     name: 'user01',
  //     vote: '1234',
  //   },
  //   {
  //     name: 'user03',
  //     vote: '1234',
  //   },
  //   {
  //     name: 'user05',
  //     vote: '1234',
  //   },
  // ];

  useSocket('USER_JOINED', users => {
    setUsers(users);
  });
  useSocket('USER_VOTED', user => {
    setUserVoted(user);
  });
  let hasVoted = user => {
    return usersVoted.some(el => el.name === user.name);
  };

  return (
    <Box className={classes.root}>
      {users.map(user => (
        <Box key={user.name} className={classes.item}>
          <Box className={hasVoted(user) ? classes.userInfoVoted : classes.userInfo}>
            <Avatar>{user.name.charAt(0).toUpperCase()}</Avatar>
            <Typography>{hasVoted(user) ? <b>{user.name} - [Voted]</b> : user.name}</Typography>
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
