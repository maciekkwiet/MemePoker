import React, { forwardRef } from 'react';
import { useSocket } from 'socketio-hooks';
import { useBackend } from 'hooks/useBackend';
import { useUserContext } from 'Contexts/UserContext';
import { TextField, Button } from '@material-ui/core';
import { TaskEstimatedChartStyles } from './TaskEstimatedChartStyles';

const TaskEstimatedChart = ({ onClose }) => {
  const classes = TaskEstimatedChartStyles();
  const sendVotesShow = useBackend('SUBMIT_ESTIMATION');
  const sendVotesClear = useBackend('CLEAR_VOTES');
  const { isAdmin } = useUserContext().user;

  useSocket('VOTES_CLEARED', () => {
    onClose();
  });

  const onHandleClick = e => {
    e.preventDefault();
    const task = e.target.result.value;
    sendVotesShow({ task });
    sendVotesClear();
    onClose();
  };

  const onClickHandlerClear = () => {
    sendVotesClear();
  };

  return (
    <>
      {isAdmin && (
        <div className={classes.wrapper}>
          <form onSubmit={onHandleClick} autoComplete="off" className={classes.wrapperInput}>
            <div>
              {' '}
              <TextField
                label="Final estimation"
                variant="outlined"
                id="result"
                autoComplete="off"
                name="result"
                size="small"
                className={classes.wrapperInput}
              ></TextField>{' '}
            </div>
            <div>
              <Button className={classes.button} color="primary" variant="contained" onClick={onClickHandlerClear}>
                REESTIMATE
              </Button>{' '}
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
