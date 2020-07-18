import React, { useState } from 'react';
import HistoryModalContent from 'Components/HistoryModalContent/';
import { Modal, Box } from '@material-ui/core';
import TaskResultstyles from './TaskResultStyles';
import { useUserContext } from 'Contexts/UserContext';
import { useEmit } from 'socketio-hooks';
import { useSocket } from 'socketio-hooks';
const TaskResult = () => {
  const { taskEstimated, setTaskEstimated } = useUserContext();
  const classes = TaskResultstyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // useSocket('USER_VOTED', userVoted => {});

  // useSocket('CARDS_REVEALED', onUserVote => {});

  useSocket('USER_VOTED', user => {
    console.log(user);
  });

  useSocket('CARDS_REVEALED', user => {
    if (user) {
      setOpen(true);
    }
  });

  return (
    <Box display="inline-block">
      <Modal open={open} className={classes.root} onClose={handleOpen}>
        <HistoryModalContent onClose={handleClose}>
          <div>
            <h1>TEST</h1>
          </div>
        </HistoryModalContent>
      </Modal>
    </Box>
  );
};

export default TaskResult;
