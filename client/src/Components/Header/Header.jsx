import React from 'react';
import { Box } from '@material-ui/core';
import HeaderStyles from './HeaderStyles';

const Header = () => {
  const imgSrc = 'https://files.slack.com/files-pri/TCB921BEE-F015MT9B5N3/logo.png';
  const classes = HeaderStyles();

  return (
    <Box className={classes.box}>
      <img className={classes.img} src={imgSrc} alt="logo"></img>
    </Box>
  );
};

export default Header;
