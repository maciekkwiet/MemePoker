import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import React, { forwardRef, useState } from 'react';

import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
import TaskEstimatedAdminBox from 'Components/TaskEstimatedAdminBox/TaskEstimatedAdminBox';
import TaskEstimatedBoxStyles from './TaskEstimatedBoxStyles';
import TaskEstimationElement from 'Components/TaskEstimationElement/TaskEstimationElement';
import { useSocket } from 'socketio-hooks';
import { useUserContext } from 'Contexts/UserContext';

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
        {isAdmin && <TaskEstimatedAdminBox onClose={handleClose} />}
      </DialogContent>
    </Dialog>
  );
};

export default forwardRef((props, ref) => <TaskEstimatedBox {...props} forwardedRef={ref} />);
