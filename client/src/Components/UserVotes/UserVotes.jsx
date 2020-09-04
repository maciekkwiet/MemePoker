import React, { useState, useEffect } from 'react';
import { Box, Typography, Avatar, Paper } from '@material-ui/core';
import { useSocket } from 'socketio-hooks';
import UserVotesStyles from './UserVotesStyles';
import { useRoomContext } from 'Contexts/RoomContext';
import { useUserContext } from 'Contexts/UserContext';

const UserVotes = () => {
  const classes = UserVotesStyles();
  const { room } = useRoomContext();
  const [users, setUsers] = useState(room.users);
  const [hasEveryoneVoted, setHasEveryoneVoted] = useState(false);
  const [boxHeight, setBoxHeight] = useState();
  const { isAdmin } = useUserContext().user;

  useSocket('USER_JOINED', users => {
    setUsers(users);
  });

  useSocket('USER_VOTED', userVoted => {
    const newUsers = users.map(user => (user.name === userVoted.name ? userVoted : user));
    setUsers(newUsers);
  });

  useSocket('VOTES_CLEARED', users => {
    setHasEveryoneVoted(false);
    setUsers(users);
  });

  useSocket('ROOM_VOTES', ({ votes }) => {
    setHasEveryoneVoted(true);
    setUsers(votes);
  });

  useEffect(() => {
    setBoxHeight(document.getElementById('admin').offsetHeight);
  });

  return (
    <Box id="admin" className={isAdmin ? classes.isAdmin : classes.isNotAdmin} maxHeight={boxHeight}>
      {users.map(user => (
        <Paper key={user.name} className={classes.item} elevation={4}>
          <Box className={user.vote ? classes.userInfoVoted : classes.userInfo}>
            <Avatar>{user.name.charAt(0).toUpperCase()}</Avatar>
            <Typography>{user.vote ? <b>{user.name} - [Voted]</b> : user.name}</Typography>
          </Box>
          <Box>
            <Typography>{hasEveryoneVoted ? user.vote : ''}</Typography>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default UserVotes;
