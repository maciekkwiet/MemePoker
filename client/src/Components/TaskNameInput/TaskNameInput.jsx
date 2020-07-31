import React from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

import { useUserContext } from 'Contexts/UserContext';
import { TaskNameInputStyles, CustomLabel } from './TaskNameInputStyles';
import { useBackend } from 'hooks/useBackend';

import { Box, Button, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const Schema = yup.object().shape({
  task: yup.string().required(),
});

const TaskNameInput = () => {
  const { user } = useUserContext();
  const sendTask = useBackend('NEW_TASK');
  const classes = TaskNameInputStyles();

  const { register, handleSubmit, errors } = useForm({
    validationSchema: Schema,
  });

  const onSubmitHandler = ({ task }) => {
    sendTask({ task });
  };

  if (!user.isAdmin) return null;

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Box className={classes.root} mb={2}>
        <CustomLabel htmlFor="task">Task name:</CustomLabel>
        <TextField
          className={errors.task ? classes.textFieldError : classes.textField}
          id="task"
          name="task"
          variant="outlined"
          placeholder={errors.task ? errors.task.message : 'Task Name'}
          fullWidth
          autoComplete="off"
          inputRef={register}
          error={!!errors.task}
        />

        <Button className={classes.btn} color="primary" variant="contained" type="submit">
          <SendIcon />
        </Button>
      </Box>
    </form>
  );
};

export default TaskNameInput;
