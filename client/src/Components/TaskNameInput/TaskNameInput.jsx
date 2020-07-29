import React from 'react';
import { Box, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { useUserContext } from 'Contexts/UserContext';

import { useBackend } from 'hooks/useBackend';
import { TaskNameInputStyles, CustomLabel, CustomInput } from './TaskNameInputStyles';

const TaskNameInput = () => {
  const { user } = useUserContext();
  const sendTask = useBackend('NEW_TASK');
  const classes = TaskNameInputStyles();

  const onSubmitHandler = e => {
    e.preventDefault();
    const task = e.target.taskName.value;
    sendTask({ task });
    e.target.reset();
  };

  if (!user.isAdmin) return null;

  return (
    <form onSubmit={onSubmitHandler}>
      <Box className={classes.root} mb={2}>
        <CustomLabel htmlFor="taskName">Task name:</CustomLabel>
        <CustomInput
          id="taskName"
          name="taskName"
          variant="filled"
          placeholder="TYPE A TASK"
          fullWidth
          autoComplete="off"
        />
        <Button className={classes.btn} color="primary" variant="contained" type="submit">
          <SendIcon />
        </Button>
      </Box>
    </form>
  );
};

export default TaskNameInput;
