import React from 'react';
import { Button } from '@material-ui/core';

import VoteButtonStyles from './VoteButtonStyles';

const VoteBtn = ({ content }) => {
  const classes = VoteButtonStyles();

  return (
    <Button className={classes.root} variant="contained" color="primary" fullWidth>
      {content}
    </Button>
  );
};

export default VoteBtn;
