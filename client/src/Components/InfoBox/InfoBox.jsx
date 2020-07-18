import React from 'react';
import { Paper, Typography } from '@material-ui/core';

import theme from 'theme';
import InfoBoxStyles from './InfoBoxStyles';

const InfoBox = ({ title, value, align = 'center', padding = 1 }) => {
  const classes = InfoBoxStyles();

  return (
    <Paper elevation={0} className={classes.root} style={{ padding: theme.spacing(padding) }}>
      <Typography component="div" variant="h6" align={align}>
        {title}
      </Typography>
      <Typography component="div" variant="body2" align={align}>
        {value}
      </Typography>
    </Paper>
  );
};

export default InfoBox;
