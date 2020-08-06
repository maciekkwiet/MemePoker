import React, { forwardRef } from 'react';
import { useSocket } from 'socketio-hooks';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useBackend } from 'hooks/useBackend';
import { TaskEstimatedChartStyles } from './TaskEstimatedChartStyles';
import { useUserContext } from 'Contexts/UserContext';

import { TextField, Button } from '@material-ui/core';

const Schema = yup.object().shape({
  result: yup.number().required(),
});

const TaskEstimatedChart = ({ onClose }) => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: Schema,
  });
  const classes = TaskEstimatedChartStyles({ errors });

  const sendVotesShow = useBackend('SUBMIT_ESTIMATION');
  const sendVotesClear = useBackend('CLEAR_VOTES');
  const { isAdmin } = useUserContext().user;

  useSocket('VOTES_CLEARED', () => {
    onClose();
  });

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
export default forwardRef((props, ref) => <TaskEstimatedChart {...props} forwardedRef={ref} />);
