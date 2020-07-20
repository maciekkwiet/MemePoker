import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useEmit } from 'socketio-hooks';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router-dom';

import { Typography, IconButton, Table, TableContainer, TableBody, Box, Paper } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import { TaskEstimatedChartStyles } from './TaskEstimatedChartStyles';

const TaskEstimatedChart = ({ children, onClose, modalTitle }) => {
  const sendTask = useEmit('NEW_TASK');
  const sendVotesClear = useEmit('CLEAR_VOTES');
  const { roomId } = useParams();
  const onHandleClick = e => {
    e.preventDefault();
    const task = e.target.result.value;
    sendTask({ task });
    e.target.reset();
    console.log(task);
  };
  const onClickHandlerClear = () => {
    sendVotesClear(roomId);
    console.log(roomId);
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
      </Paper>
    </>
  );
};

export default TaskEstimatedChart;
