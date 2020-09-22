import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { useBackend } from 'hooks/useBackend';
import leaveRoomButtonStyles from './LeaveRoomButtonStyles';
import { IconButton, useMediaQuery, useTheme } from '@material-ui/core';

const LeaveRoomButton = () => {
  const classes = leaveRoomButtonStyles();
  const leaveRoom = useBackend('USER_DELETE');
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const isDesktop = !isMobile;

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLeaveRoom = () => {
    setOpen(false);
    history.push(`/`);
    leaveRoom();
  };

  return (
    <>
      {isDesktop && (
        <Chip
          icon={<ExitToAppOutlinedIcon />}
          label="Leave room"
          onClick={handleClick}
          variant="outlined"
          color="primary"
          className={classes.root}
        />
      )}
      {isMobile && (
        <IconButton onClick={handleClick} color="primary" className={classes.root} size="small">
          <ExitToAppOutlinedIcon />
        </IconButton>
      )}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{'Are you sure you want to leave?'}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={handleLeaveRoom} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default LeaveRoomButton;
