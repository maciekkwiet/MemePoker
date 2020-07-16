import React from 'react';
import { Paper } from '@material-ui/core';

import mainBoxStyles from './MainBoxStyles';
import theme from 'theme';

const MainBox = ({ padding = 4, children }) => {
  const classes = mainBoxStyles();

  return (
    <Paper elevation={0} variant="outlined" className={classes.root} style={{ padding: theme.spacing(padding) }}>
      {children}
    </Paper>
  );
};

export default MainBox;
