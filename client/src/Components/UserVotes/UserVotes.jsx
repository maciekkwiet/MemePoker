import React, { useState } from 'react';
import { Box, Typography, Avatar, Paper } from '@material-ui/core';
import { useSocket } from 'socketio-hooks';
import UserVotesStyles from './UserVotesStyles';
import { useRoomContext } from 'Contexts/RoomContext';
import { useUserContext } from 'Contexts/UserContext';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import { useBackend } from 'hooks/useBackend';

const UserVotes = () => {
  const classes = UserVotesStyles();
  const { room } = useRoomContext();
  const [users, setUsers] = useState(room.users);
  const { isAdmin } = useUserContext().user;
  const kickUser = useBackend('USER_KICK');

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

  const handleClick = name => () => {
    kickUser({ name });
    console.log('handle');
  };

  return (
    <Box className={isAdmin ? classes.isAdmin : classes.isNotAdmin}>
      <List>
        {users.map(user => (
          <Paper key={user.name} className={classes.item} elevation={4}>
            <ListItem>
              <ListItemIcon>
                <Avatar> {user.name.charAt(0).toUpperCase()}</Avatar>
              </ListItemIcon>
              <ListItemText
                className={user.hasVoted ? classes.userInfoVoted : classes.userInfo}
                primary={user.hasVoted ? <b>{user.name} - [Voted]</b> : user.name}
              />
            </ListItem>
            <Typography className={classes.vote}>{user.vote}</Typography>
            <IconButton className={classes.kickButton} onClick={handleClick(user.name)}>
              <ClearIcon />
            </IconButton>
          </Paper>
          // <Paper key={user.name} className={classes.item} elevation={4}>
          //   <Box className={user.hasVoted ? classes.userInfoVoted : classes.userInfo}>
          //     <Avatar>{user.name.charAt(0).toUpperCase()}</Avatar>
          //     <Typography>{user.hasVoted ? <b>{user.name} - [Voted]</b> : user.name}</Typography>
          //   </Box>
          //   <Box>
          //     <Typography>{user.vote}</Typography>
          //   </Box>
          // </Paper>
        ))}
      </List>
    </Box>
  );
};

export default UserVotes;
