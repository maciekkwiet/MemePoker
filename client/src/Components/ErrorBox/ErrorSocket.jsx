import React, { useState, useEffect } from 'react';
import { Snackbar, IconButton } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import { useSocket } from 'socketio-hooks';

const ErrorSocket = () => {
  const [snackPack, setSnackPack] = useState([]);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    if (snackPack.length && !error) {
      setError({ ...snackPack[0] });
      setSnackPack(prev => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && error && open) {
      setOpen(false);
    }
  }, [snackPack, error, open]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const handleExited = () => {
    setError(undefined);
  };

  useSocket('EXCEPTION', message => {
    setSnackPack(prev => [...prev, { message, key: new Date().getTime() }]);
  });

  return (
    <div>
      <Snackbar
        key={error ? error.key : undefined}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        onExited={handleExited}
      >
        <MuiAlert
          severity="error"
          variant="filled"
          elevation={6}
          onClose={handleClose}
          action={
            <React.Fragment>
              <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        >
          {error ? error.message : undefined}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default ErrorSocket;
