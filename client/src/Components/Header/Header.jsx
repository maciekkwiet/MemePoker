import React from 'react';
import { Box } from '@material-ui/core';
import HeaderStyles from './HeaderStyles';
import Logo from 'Assets/Images/logo.png';

const Header = () => {
  const classes = HeaderStyles();

  return (
    <Box className={classes.box}>
      <img className={classes.img} src={Logo} alt="logo"></img>
    </Box>
  );
};

export default Header;
