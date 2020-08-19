import React from 'react';
import { Switch, Typography } from '@material-ui/core';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import Tooltip from '@material-ui/core/Tooltip';

import observerCheckboxStyles from './ObserverSwitchStyles';

const ObserverSwitch = ({ checked, handleChange }) => {
  const classes = observerCheckboxStyles();

  return (
    <>
      <div className={classes.main}>
        <div className={classes.switch}>
          <Typography>Guest</Typography>
          <Switch className={classes.checkBox} checked={!checked} onChange={handleChange} color="primary" />
          <Typography>User</Typography>
        </div>
        <div className={classes.tooltip}>
          <Tooltip title="As a guest you are not allow to vote">
            <HelpOutlineOutlinedIcon />
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default ObserverSwitch;
