import React, { useState, useEffect } from 'react';
import { Box, Typography, Avatar, Paper, useMediaQuery, Drawer, Chip } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { useSocket } from 'socketio-hooks';
import UserVotesStyles from './UserVotesStyles';
import { useRoomContext } from 'Contexts/RoomContext';
import { useUserContext } from 'Contexts/UserContext';

const UserVotes = () => {
  const classes = UserVotesStyles();
  const { room, updateRoomInfo } = useRoomContext();
  const [users, setUsers] = useState(room.users);

  const [boxHeight, setBoxHeight] = useState();

  const { isAdmin } = useUserContext().user;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const isDesktop = !isMobile;

  useSocket('USER_JOINED', users => {
    setUsers(users);
    updateRoomInfo({ ...room, users });
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

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    const hide = document.getElementsByClassName(classes.item);
    const element = document.getElementById('admin');
    if (window.innerWidth > '960px') {
      if (hide.length) {
        [...hide].map(item => (item.style.display = 'none'));

        setBoxHeight(element.offsetHeight);

        [...hide].map(item => (item.style.display = 'flex'));
      } else {
        setBoxHeight(element.offsetHeight);
      }
    }
  });

  return (
    <>
      {isDesktop && (
        <Box
          id="admin"
          className={`${classes.root} ${isAdmin ? classes.isAdmin : classes.isNotAdmin}`}
          maxHeight={boxHeight}
        >
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
      )}
      {isMobile && (
        <>
          <Chip
            color="primary"
            onClick={() => {
              toggleDrawer();
            }}
            label="Results"
            icon={<ListAltIcon />}
          />
          <Drawer
            anchor="bottom"
            open={isDrawerOpen}
            onClose={() => {
              toggleDrawer();
            }}
          >
            <Box className={`${classes.root} ${isAdmin ? classes.isAdmin : classes.isNotAdmin}`}>
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
          </Drawer>
        </>
      )}
    </>
  );
};

export default UserVotes;
