import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightBold,
  },
}));

const VoteBtn = ({ content }) => {
  const classes = useStyles();

  return (
    <Button className={classes.root} variant="contained" color="primary" fullWidth>
      {content}
    </Button>
  );
};

export default VoteBtn;
