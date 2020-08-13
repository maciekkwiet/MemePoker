import React from 'react';
import { CircularProgress, Typography } from '@material-ui/core';

import loaderStyles from './LoaderStyles';

const Loader = ({ text }) => {
  const classes = loaderStyles();

  return (
    <div className={classes.root}>
      <CircularProgress thickness={5} />
      <Typography className={classes.msg} variant="h5">
        {text}
      </Typography>
    </div>
  );
};

export default Loader;
