import React from 'react';
import { Box, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { useEmit } from 'socketio-hooks';
import { useParams } from 'react-router-dom';
import { useUserContext } from 'Contexts/UserContext';

import { TaskNameInputStyles, CustomLabel, CustomInput } from './TaskNameInputStyles';

const TaskNameInput = () => {
  const { getUser } = useUserContext();
  const { roomId } = useParams();
  const { isAdmin } = getUser(roomId);
  const classes = TaskNameInputStyles();
  const sendTask = useEmit('NEW_TASK');

  const onSubmitHandler = e => {
    e.preventDefault();
    const task = e.target.taskName.value;
    sendTask({ roomId, task });
    e.target.reset();
  };

  return isAdmin ? (
    <form onSubmit={onSubmitHandler}>
      <Box className={classes.root} mb={2}>
        <CustomLabel htmlFor="taskName">Task name:</CustomLabel>
        <CustomInput id="taskName" name="taskName" variant="filled" placeholder="TYPE A TASK" fullWidth />
        <Button className={classes.btn} color="primary" variant="contained" type="submit">
          <SendIcon />
        </Button>
      </Box>
    </form>
  ) : (
    <div></div>
  );
};

export default TaskNameInput;
