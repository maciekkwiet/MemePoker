import React, { useState, useCallback } from 'react';
import { Box, List, useMediaQuery, Drawer, Chip } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { useSocket } from 'socketio-hooks';

import UserVotesStyles from './UserVotesStyles';
import { useRoomContext } from 'Contexts/RoomContext';
import { useUserContext } from 'Contexts/UserContext';
import UserBox from 'Components/UserBox';

const UserVotes = () => {
  const classes = UserVotesStyles();
  const { room } = useRoomContext();
  const [users, setUsers] = useState(room.users);
  const { isAdmin } = useUserContext().user;
  const [boxHeight, setBoxHeight] = useState();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const isDesktop = !isMobile;

  useSocket('USER_JOINED', users => setUsers(users));

  useSocket('USER_DELETED', users => setUsers(users));

  useSocket('USER_VOTED', userVoted => {
    const newUsers = users.map(user => (user.name === userVoted.name ? userVoted : user));
    setUsers(newUsers);
  });

  useSocket('VOTES_CLEARED', users => setUsers(users));

  useSocket('ROOM_VOTES', ({ votes }) => setUsers(votes));

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const measuredRef = useCallback(
    node => {
      const hide = document.getElementsByClassName(classes.item);
      if (window.innerWidth > 960 && node !== null) {
        if (hide.length) {
          [...hide].map(item => (item.style.display = 'none'));
          setBoxHeight(node.getBoundingClientRect().height);
          [...hide].map(item => (item.style.display = 'flex'));
        } else {
          setBoxHeight(node.getBoundingClientRect().height);
        }
      }
    },
    [isDesktop]
  );

  return (
    <>
      {isDesktop && (
        <Box
          ref={measuredRef}
          className={`${classes.root} ${isAdmin ? classes.isAdmin : classes.isNotAdmin}`}
          maxHeight={boxHeight}
        >
          <List>
            {users.map(user => (
              <UserBox key={user.name} user={user} />
            ))}
          </List>
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
              <List>
                {users.map(user => (
                  <UserBox user={user} />
                ))}
              </List>
            </Box>
          </Drawer>
        </>
      )}
    </>
  );
};

export default UserVotes;
