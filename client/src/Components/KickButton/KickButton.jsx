import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Dialog, DialogActions, DialogTitle, Button, IconButton } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { useSocket } from 'socketio-hooks';

import { useBackend } from 'hooks/useBackend';
import KickButtonStyles from './KickButtonStyles';

const KickButton = props => {
  const classes = KickButtonStyles();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [openMessage, setOpenMessage] = useState(false);
  const kickUser = useBackend('USER_KICK');
  const [kickedUserName, setKickedUserName] = useState('');

  useSocket('KICKED_REDIRECT', () => {
    setOpenMessage(true);
  });

  const handleKickOpen = name => () => {
    setKickedUserName(name);
    setOpen(true);
  };

  const handleKick = name => () => {
    let id = props.userId;
    kickUser({ name, id });
    setOpen(false);
  };

  const handleMessageClose = () => {
    setOpenMessage(false);
    history.push(`/`);
  };

  const handleKickClose = () => setOpen(false);

  return (
    <Box>
      {props.isAdmin && (
        <IconButton
          className={props.isHover ? classes.kickButtonHover : classes.kickButton}
          onClick={handleKickOpen(props.userName)}
        >
          <ClearIcon />
        </IconButton>
      )}
      <Dialog open={open} onClose={handleKickClose}>
        <DialogTitle>{`Are you sure you want to kick ${kickedUserName}?`}</DialogTitle>
        <DialogActions>
          <Button onClick={handleKickClose} color="primary">
            No
          </Button>
          <Button onClick={handleKick(kickedUserName)} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openMessage} onClose={handleMessageClose}>
        <DialogTitle>{`You have been kicked form the room.`}</DialogTitle>
        <DialogActions>
          <Button onClick={handleMessageClose} color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default KickButton;
