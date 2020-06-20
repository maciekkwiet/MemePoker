import React from 'react';
import { Box, Typography, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const users = [
  {
    userName: 'user01',
    voteValue: '1234',
  },
  {
    userName: 'user02',
    voteValue: '1234',
  },
  {
    userName: 'user03',
    voteValue: '1234',
  },
  {
    userName: 'user04',
    voteValue: '1234',
  },
  {
    userName: 'user05',
    voteValue: '1234',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  item: {
    padding: theme.spacing(1, 0),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '& > div': {
      marginRight: theme.spacing(2),
    },
  },
}));

const UserVotes = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {users.map((user) => (
        <Box key={user.userName} className={classes.item}>
          <Box className={classes.userInfo}>
            <Avatar>{user.userName.charAt(0).toUpperCase()}</Avatar>
            <Typography>{user.userName}</Typography>
          </Box>
          <Box>
            <Typography>{user.voteValue}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default UserVotes;
