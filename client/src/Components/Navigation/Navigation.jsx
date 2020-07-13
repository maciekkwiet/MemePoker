import React from 'react';
import { Box } from '@material-ui/core';
import CopyUrl from '../CopyURL/CopyURL';

import navigationStyles from './NavigationStyles';
import HistoryBox from 'Components/HistoryBox';

const Navigation = () => {
  const classes = navigationStyles();

  return (
    <Box className={classes.root}>
      <HistoryBox />
      <CopyUrl />
    </Box>
  );
};

export default Navigation;
