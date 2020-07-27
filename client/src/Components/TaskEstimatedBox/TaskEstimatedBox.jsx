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
  const [resultsAnalysis, setresultsAnalysis] = useState({});
  const handleClose = () => {
    setOpen(false);
  };

  useSocket('ROOM_VOTES', ({ votes }) => {
    setOpen(true);
    setUserVoted([...votes]);
  });
  useSocket('ROOM_VOTES', ({ task }) => {
    setresultsAnalysis(task.Analysis);
  });

  useSocket('TASK_UPDATED', ({ title }) => setTaskName(title));

  const classes = TaskEstimatedBoxStyles();

  return (
    <Box display="inline-block">
      <Modal open={open} className={classes.root} onClose={handleClose}>
        <TaskEstimatedChart onClose={handleClose} modalTitle={taskName}>
          <TaskEstimationElement users={userVoted} resultsAnalysis={resultsAnalysis} />
        </TaskEstimatedChart>
      </Modal>
    </Box>
  );
};

export default TaskEstimatedBox;
