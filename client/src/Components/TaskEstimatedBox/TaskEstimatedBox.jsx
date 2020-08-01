import React, { useState, forwardRef } from 'react';
import { useSocket } from 'socketio-hooks';

import TaskEstimatedBoxStyles from './TaskEstimatedBoxStyles';
import { useUserContext } from 'Contexts/UserContext';
import TaskEstimatedAdminBox from 'Components/TaskEstimatedAdminBox/TaskEstimatedAdminBox';
import TaskEstimationElement from 'Components/TaskEstimationElement/TaskEstimationElement';

import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';

const TaskEstimatedBox = () => {
  const classes = TaskEstimatedBoxStyles();
  const { isAdmin } = useUserContext().user;

  const [open, setOpen] = useState(false);
  const [task, setTask] = useState(null);
  const handleClose = () => {
    setOpen(false);
  };

  useSocket('ROOM_VOTES', ({ task }) => {
    setTask(task);
    setOpen(true);
  });

  useSocket('VOTES_CLEARED', () => {
    setOpen(false);
  });

  return (
    <Dialog
      disableBackdropClick={isAdmin}
      disableEscapeKeyDown={isAdmin}
      open={open}
      onClose={handleClose}
      scroll="paper"
      fullWidth={true}
      maxWidth="md"
    >
      <DialogContent className={classes.root}>
        {!isAdmin && (
          <IconButton aria-label="close" onClick={handleClose} className={classes.closeButton}>
            <CloseIcon />
          </IconButton>
        )}

        <DialogTitle>{task?.title}</DialogTitle>
        <TaskEstimationElement users={task?.results} resultsAnalysis={task?.analysis} onClose={handleClose} />
        <TaskEstimatedAdminBox onClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

export default forwardRef((props, ref) => <TaskEstimatedBox {...props} forwardedRef={ref} />);
