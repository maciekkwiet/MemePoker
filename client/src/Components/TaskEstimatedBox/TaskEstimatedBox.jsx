import React, { useState } from 'react';
import { Modal, Box } from '@material-ui/core';
import TaskEstimatedBoxStyles from './TaskEstimatedBoxStyles';
import TaskEstimatedChart from 'Components/TaskEstimatedChart/TaskEstimatedChart';
import TaskEstimationElement from 'Components/TaskEstimationElement/TaskEstimationElement';
import { useSocket } from 'socketio-hooks';

const TaskEstimatedBox = () => {
  const [open, setOpen] = useState(false);
  const [taskName, setTaskName] = useState();
  const [userVoted, setUserVoted] = useState([]);
  console.log('open', open);
  const handleClose = () => {
    setOpen(false);
  };

  useSocket('ROOM_VOTES', user => {
    setOpen(true);
    setUserVoted([...user]);
  });

  useSocket('TASK_UPDATED', ({ title }) => setTaskName(title));

  const classes = TaskEstimatedBoxStyles();

  return (
    <Box display="inline-block">
      <Modal open={open} className={classes.root} onClose={handleClose}>
        <TaskEstimatedChart onClose={handleClose} modalTitle={taskName}>
          <TaskEstimationElement users={userVoted} />
        </TaskEstimatedChart>
      </Modal>
    </Box>
  );
};

export default TaskEstimatedBox;
