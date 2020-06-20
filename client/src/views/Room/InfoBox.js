import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    border: `2px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(0.25),
    textAlign: 'center',
    '& :first-child': {
      textTransform: 'uppercase',
    },
  },
}));

const InfoBox = ({ title, value }) => {
  const classes = useStyles();

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
