import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    border: '1px solid',
    borderColor: theme.palette.primary.main,
    padding: theme.spacing(0.25),
    textAlign: 'center',
  },
}));

const InfoBox = ({ title, value }) => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <Typography variant="button">{title}</Typography>
      <Typography variant="body2">{value}</Typography>
    </Paper>
  );
};

export default InfoBox;
