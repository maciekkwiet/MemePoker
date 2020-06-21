import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';

import InfoBoxStyles from './InfoBoxStyles';

const InfoBox = ({ title, value }) => {
  const classes = InfoBoxStyles();

  return (
    <Grid item xs={6} sm={12}>
      <Paper elevation={0} className={classes.paper}>
        <Typography component="div" variant="h6">
          {title}
        </Typography>
        <Typography component="div" variant="body2">
          {value}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default InfoBox;
