import React from 'react';
import { useBackend } from 'hooks/useBackend';
import { useSocket } from 'socketio-hooks';
import { useUserContext } from 'Contexts/UserContext';
import { TaskEstimatedChartStyles } from './TaskEstimatedChartStyles';

import {
  Typography,
  IconButton,
  Table,
  TableContainer,
  TableBody,
  Box,
  Paper,
  TextField,
  Button,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const TaskEstimatedChart = ({ children, onClose, modalTitle }) => {
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
  };

  const onClickHandlerClear = () => {
    sendVotesClear();
  };

  const classes = TaskEstimatedChartStyles();
  return (
    <>
      <Paper className={classes.root}>
        <Typography variant="h6" component="h2" className={classes.title}>
          {modalTitle}
        </Typography>
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
        <TableContainer component={Box}>
          <Table size="small" className={classes.table}>
            <TableBody>{children}</TableBody>
          </Table>
        </TableContainer>
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
                {' '}
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
      </Paper>
    </>
  );
};

export default TaskEstimatedChart;
