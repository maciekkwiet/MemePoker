import React, { useState } from 'react';
import { Box, Typography, Avatar, Paper } from '@material-ui/core';
import { useSocket } from 'socketio-hooks';
import UserVotesStyles from './UserVotesStyles';
import { useRoomContext } from 'Contexts/RoomContext';
import { useUserContext } from 'Contexts/UserContext';

const UserVotes = () => {
  const classes = UserVotesStyles();
  const { room } = useRoomContext();
  const [users, setUsers] = useState(room.users);
  const { isAdmin } = useUserContext().user;

  useSocket('USER_JOINED', users => {
    setUsers(users);
  });

  useSocket('USER_DELETED', users => {
    setUsers(users);
  });

  useSocket('USER_VOTED', userVoted => {
    const newUsers = users.map(user => (user.name === userVoted.name ? userVoted : user));
    setUsers(newUsers);
  });

  useSocket('VOTES_CLEARED', users => {
    setUsers(users);
  });

  useSocket('ROOM_VOTES', ({ votes }) => {
    setUsers(votes);
  });

  return (
    <Box className={isAdmin ? classes.isAdmin : classes.isNotAdmin}>
      {users.map(user => (
        <Paper key={user.name} className={classes.item} elevation={4}>
          <Box className={user.hasVoted ? classes.userInfoVoted : classes.userInfo}>
            <Avatar>{user.name.charAt(0).toUpperCase()}</Avatar>
            <Typography>{user.hasVoted ? <b>{user.name} - [Voted]</b> : user.name}</Typography>
          </Box>
          <Box>
            <Typography>{user.vote}</Typography>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default UserVotes;
