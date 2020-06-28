import React from 'react';
import { Paper, Typography } from '@material-ui/core';

import InfoBoxStyles from './InfoBoxStyles';

const InfoBox = ({ title, value }) => {
  const classes = InfoBoxStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <Typography component="div" variant="h6">
        {title}
      </Typography>
      <Typography component="div" variant="body2">
        {value}
      </Typography>
    </Paper>
  );
};

export default InfoBox;
