import React from 'react';
import { Grid, Switch, Typography } from '@material-ui/core';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import observerCheckboxStyles from './ObserverSwitchStyles';

const ObserverSwitch = ({ checked, handleChange }) => {
  const classes = observerCheckboxStyles();

  return (
    <>
      <Grid container component="label" alignItems="center" spacing={1} className={classes.main}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10} className={classes.switch}>
          <Typography>Guest</Typography>
          <Switch className={classes.checkBox} checked={!checked} onChange={handleChange} color="primary" />
          <Typography>User</Typography>
        </Grid>
        <Grid item xs={1} className={classes.test}>
          <Tooltip title="As a guest you are not allow to vote">
            <HelpOutlineOutlinedIcon />
          </Tooltip>
        </Grid>
      </Grid>
    </>
  );
};

export default ObserverSwitch;
