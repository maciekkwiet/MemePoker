import React from 'react';
import { Box, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import { TaskNameInputStyles, CustomLabel, CustomInput } from './TaskNameInputStyles';

const TaskNameInput = () => {
  const classes = TaskNameInputStyles();

  return (
    <Box className={classes.root}>
      <CustomLabel htmlFor="taskName">Task name:</CustomLabel>
      <CustomInput id="taskName" variant="filled" placeholder="TYPE A TASK" fullWidth />
      <Button className={classes.btn} color="primary" variant="contained">
        <SendIcon />
      </Button>
    </Box>
  );
};

export default TaskNameInput;
