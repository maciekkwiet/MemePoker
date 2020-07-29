import React, { useState, forwardRef } from 'react';
import { useBackend } from 'hooks/useBackend';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import TaskEstimatedBoxStyles from './TaskEstimatedBoxStyles';
import TaskEstimatedChart from 'Components/TaskEstimatedChart/TaskEstimatedChart';
import TaskEstimationElement from 'Components/TaskEstimationElement/TaskEstimationElement';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useSocket } from 'socketio-hooks';

const TaskEstimatedBox = () => {
  const classes = TaskEstimatedBoxStyles();

  const [open, setOpen] = useState(false);
  const [task, setTask] = useState(null);

  const sendVotesClear = useBackend('CLEAR_VOTES');
  const handleClose = () => {
    setOpen(false);
  };

  useSocket('ROOM_VOTES', ({ task }) => {
    setTask(task);
    setOpen(true);
    console.log({ task });
  });

  const onClickHandlerClear = () => {
    sendVotesClear();
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={onClickHandlerClear} scroll="paper" fullWidth={true} maxWidth="md">
      <DialogContent className={classes.root}>
        <IconButton aria-label="close" onClick={onClickHandlerClear} className={classes.closeButton}>
          <CloseIcon />
        </IconButton>
        <DialogTitle>{task?.title}</DialogTitle>
        <TaskEstimationElement users={task?.results} resultsAnalysis={task?.analysis} onClose={onClickHandlerClear} />
        <TaskEstimatedChart onClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

export default forwardRef((props, ref) => <TaskEstimatedBox {...props} forwardedRef={ref} />);
