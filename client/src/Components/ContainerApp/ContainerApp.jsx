import React from 'react';
import { Paper } from '@material-ui/core';

import ContainerAppStyles from './ContainerAppStyles';

const ContainerApp = props => {
  const classes = ContainerAppStyles();

  return (
    <Paper elevation={0} variant="outlined" className={classes.root}>
      {props.children}
    </Paper>
  );
};

export default ContainerApp;
