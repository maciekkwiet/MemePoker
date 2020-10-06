import React, { useState } from 'react';
import { Typography, Avatar, Paper, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import { useUserContext } from 'Contexts/UserContext';
import UserBoxStyles from './UserBoxStyles';
import KickButton from './../KickButton';

const UserBox = ({ user, isMobile }) => {
  const classes = UserBoxStyles();
  const { isAdmin, name } = useUserContext().user;
  const [isHover, setIsHover] = useState(isMobile);

  const onMouseOver = () => {
    if (!isMobile) setIsHover(true);
  };

  const onMouseOut = () => {
    if (!isMobile) setIsHover(false);
  };

  return (
    <Paper
      key={user.name}
      className={user.name === name && isAdmin ? classes.itemAdmin : classes.item}
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
      {user.name !== name && (
        <KickButton isHover={isHover} userName={user.name} userId={user.socket} isAdmin={isAdmin} />
      )}
    </Paper>
  );
};

export default UserBox;
