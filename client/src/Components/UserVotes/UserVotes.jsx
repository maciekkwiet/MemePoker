import React from 'react';
import { Box, Typography, Avatar, Paper } from '@material-ui/core';
import UserVotesStyles from './UserVotesStyles';
import { useRoomContext } from 'Contexts/RoomContext';
import { useUserContext } from 'Contexts/UserContext';

const UserVotes = () => {
  const classes = UserVotesStyles();
  const { users } = useRoomContext().room;
  const { hasEveryoneVoted } = useRoomContext();
  const { isAdmin } = useUserContext().user;

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
