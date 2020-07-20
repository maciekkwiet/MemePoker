import React, { useState, useEffect } from 'react';
import { Box, Typography, Avatar, Tabs, Paper } from '@material-ui/core';
import { useSocket } from 'socketio-hooks';
import { useParams } from 'react-router-dom';

import { useRoomContext } from 'Contexts/RoomContext';
import UserVotesStyles from './UserVotesStyles';
import { useUserContext } from 'Contexts/UserContext';

const UserVotes = () => {
  const classes = UserVotesStyles();
  const { response } = useRoomContext();
  const [users, setUsers] = useState([]);
  const [hasEveryoneVoted, setHasEveryoneVoted] = useState(false);
  const { roomId } = useParams();
  const { getUser } = useUserContext();
  const { isAdmin } = getUser(roomId);

  useEffect(() => {
    if (response) {
      const { users } = response.room;
      setUsers(users);
    }
  }, [response]);
  useSocket('USER_JOINED', users => {
    setUsers(users);
  });
  useSocket('USER_VOTED', userVoted => {
    const newUsers = users.map(user => (user.name === userVoted.name ? userVoted : user));
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

  useSocket('ROOM_VOTES', users => {
    setHasEveryoneVoted(true);
    setUsers(users);
  });

  useSocket('CLEARED_VOTES', users => {
    setHasEveryoneVoted(false);
    setUsers(users);
  });

  return (
    <Box className={isAdmin ? classes.isAdmin : classes.isNotAdmin}>
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
