import React from 'react';
import { Paper, Typography } from '@material-ui/core';

import InfoBoxStyles from './InfoBoxStyles';

const InfoBox = props => {
  const classes = InfoBoxStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <Typography component="div" variant="h6">
        {props.title}
      </Typography>
      <Typography component="div" variant="body2">
        {props.value}
      </Typography>
    </Paper>
  );
};

export default InfoBox;
