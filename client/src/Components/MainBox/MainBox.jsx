import React from 'react';
import { Paper } from '@material-ui/core';

import MainBoxStyles from './MainBoxStyles';

const MainBox = props => {
  const classes = MainBoxStyles();

  return (
    <Paper elevation={0} variant="outlined" className={classes.root}>
      {props.children}
    </Paper>
  );
};

export default MainBox;
