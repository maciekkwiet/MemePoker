import React, { useState } from 'react';
import { Box, Typography, Avatar, Paper, Dialog, DialogActions, DialogTitle, Button } from '@material-ui/core';
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
  const [isHover, setIsHover] = useState(false);
  const [open, setOpen] = useState(false);
  const [kickedUserName, setKickedUserName] = useState('');

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

  const onMouseOver = () => setIsHover(true);

  const onMouseOut = () => setIsHover(false);

  const handleKick = name => () => {
    kickUser({ name });
    setOpen(false);
  };

  const handleKickOpen = name => () => {
    setKickedUserName(name);
    setOpen(true);
  };

  const handleKickClose = () => setOpen(false);

  return (
    <Box className={isAdmin ? classes.isAdmin : classes.isNotAdmin}>
      <List>
        {users.map(user => (
          <Paper
            key={user.name}
            className={classes.item}
            elevation={4}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
          >
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
            {isAdmin && (
              <IconButton
                className={isHover ? classes.kickButtonHover : classes.kickButton}
                onClick={handleKickOpen(user.name)}
              >
                <ClearIcon />
              </IconButton>
            )}
          </Paper>
        ))}
      </List>
      <Dialog open={open} onClose={handleKickClose}>
        <DialogTitle>{`Are you sure you want to kick ${kickedUserName}?`}</DialogTitle>
        <DialogActions>
          <Button onClick={handleKickClose} color="primary">
            No
          </Button>
          <Button onClick={handleKick(kickedUserName)} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UserVotes;
