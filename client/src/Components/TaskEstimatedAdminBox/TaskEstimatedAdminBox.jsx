import React, { forwardRef } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useBackend } from 'hooks/useBackend';
import { TaskEstimatedAdminBoxStyles } from './TaskEstimatedAdminBoxStyles';
import { useUserContext } from 'Contexts/UserContext';

import { TextField, Button } from '@material-ui/core';

const Schema = yup.object().shape({
  result: yup.number().required(),
});

const TaskEstimatedAdminBox = ({ onClose }) => {
  const sendVotesShow = useBackend('SUBMIT_ESTIMATION');
  const sendVotesClear = useBackend('CLEAR_VOTES');
  const { isAdmin } = useUserContext().user;
  const { register, handleSubmit, errors } = useForm({
    validationSchema: Schema,
  });
  const classes = TaskEstimatedAdminBoxStyles({ errors });

  const onHandleClick = ({ result }) => {
    sendVotesShow({ result });
    sendVotesClear();
    onClose();
  };

  return (
    <>
      {isAdmin && (
        <div className={classes.wrapper}>
          <form onSubmit={handleSubmit(onHandleClick)} autoComplete="off" className={classes.wrapperInput}>
            <div>
              <TextField
                label="Final estimation"
                placeholder={errors.result ? errors.result.message : 'Final estimation"'}
                variant="outlined"
                id="result"
                autoComplete="off"
                name="result"
                size="small"
                className={classes.wrapperInput}
                inputRef={register}
                error={!!errors.result}
              />
            </div>
            <div>
              <Button
                className={classes.button}
                color="primary"
                variant="contained"
                onClick={() => {
                  sendVotesClear();
                }}
              >
                REESTIMATE
              </Button>
              <Button className={classes.button} color="primary" variant="contained" type="submit">
                SUBMIT
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
export default forwardRef((props, ref) => <TaskEstimatedAdminBox {...props} forwardedRef={ref} />);
