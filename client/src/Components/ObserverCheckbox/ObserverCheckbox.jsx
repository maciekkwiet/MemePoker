import React from 'react';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import observerCheckboxStyles from './ObserverCheckboxStyles';
import { Grid, Switch, Typography } from '@material-ui/core';

const CheckboxLabel = ({ checked, handleChange }) => {
  const classes = observerCheckboxStyles();

  return (
    <>
      <Typography component="div">
        <Grid container component="label" alignItems="center" spacing={1} className={classes.checkBox}>
          <Grid item xs={1}></Grid>
          <Grid item xs={9}>
            {' '}
            <Typography>Guest</Typography>
            <Grid item>
              <Switch
                className={classes.checkBox}
                checked={!checked}
                onChange={handleChange}
                name="checkedA"
                color="primary"
              />
              <Typography>User</Typography>
            </Grid>
          </Grid>
          <Grid item xs={2} className={classes.test}>
            <Tooltip title="FDDXXXXXG">
              <HelpOutlineOutlinedIcon />
            </Tooltip>
          </Grid>
        </Grid>
      </Typography>
    </>
  );
};

export default CheckboxLabel;
