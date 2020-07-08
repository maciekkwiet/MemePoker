import React from 'react';
import { Box } from '@material-ui/core';

import navigationStyles from './NavigationStyles';

const Navigation = () => {
  const classes = navigationStyles();

  return <Box className={classes.root}>URL History</Box>;
};

export default Navigation;
