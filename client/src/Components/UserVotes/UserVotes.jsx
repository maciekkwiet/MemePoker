import React, { useState, useEffect } from 'react';
import { Box, Typography, Avatar } from '@material-ui/core';
import { useSocket } from 'socketio-hooks';

import { useRoomContext } from 'Contexts/RoomContext';
import UserVotesStyles from './UserVotesStyles';

const UserVotes = () => {
  const classes = UserVotesStyles();
  const { response } = useRoomContext();
  const [users, setUsers] = useState([]);
  const [hasEveryoneVoted, setHasEveryoneVoted] = useState(false);

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
