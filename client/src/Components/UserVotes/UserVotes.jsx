import React, { useState } from 'react';
import { Box, List } from '@material-ui/core';
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

  useSocket('USER_JOINED', users => setUsers(users));

  useSocket('USER_DELETED', users => setUsers(users));

  useSocket('USER_VOTED', userVoted => {
    const newUsers = users.map(user => (user.name === userVoted.name ? userVoted : user));
    setUsers(newUsers);
  });

  useSocket('VOTES_CLEARED', users => setUsers(users));

  useSocket('ROOM_VOTES', ({ votes }) => setUsers(votes));

  return (
    <Box className={isAdmin ? classes.isAdmin : classes.isNotAdmin}>
      <List>
        {users.map(user => (
          <UserBox user={user} />
        ))}
      </List>
    </Box>
  );
};

export default UserVotes;
