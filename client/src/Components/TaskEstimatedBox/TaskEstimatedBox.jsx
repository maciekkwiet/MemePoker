import React, { useState } from 'react';
import { Modal, Box } from '@material-ui/core';
import TaskEstimatedBoxStyles from './TaskEstimatedBoxStyles';
import TaskEstimatedChart from 'Components/TaskEstimatedChart';
import TaskEstimationElement from 'Components/TaskEstimationElement';

const TaskEstimatedBox = () => {
  const classes = TaskEstimatedBoxStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box display="inline-block">
      <Modal open={open} className={classes.root} onClose={handleClose}>
        <TaskEstimatedChart onClose={handleClose} modalTitle="Task Name">
          {/* {tasks.map(({ id, ...rest }) => {
            return <HistoryElement key={id} {...rest} />;
          })} */}
          <TaskEstimationElement />
        </TaskEstimatedChart>
      </Modal>
    </Box>
  );
};

export default TaskEstimatedBox;
