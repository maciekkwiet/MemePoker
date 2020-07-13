import React from 'react';
import { Box, Chip } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';

import navigationStyles from './NavigationStyles';
import HistoryBox from 'Components/HistoryBox';

const Navigation = () => {
  const classes = navigationStyles();

  return (
    <Box className={classes.root}>
      <HistoryBox />
      <Chip label="Url" icon={<ShareIcon />} color="primary" clickable={true} />
    </Box>
  );
};

export default Navigation;
