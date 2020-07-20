import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import VoteButton from '../VoteButton/VoteButton';

import { Typography, IconButton, Table, TableContainer, TableBody, Box, Paper } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import { TaskEstimatedChartStyles } from './TaskEstimatedChartStyles';

const TaskEstimatedChart = ({ children, onClose, modalTitle }) => {
  const classes = TaskEstimatedChartStyles();
  return (
    <>
      <Paper className={classes.root}>
        <div className={classes.headerTitle}>
          <Grid container className={classes.input}>
            <Grid className={classes.title} item xs={3}>
              <Typography variant="h6" component="h2" className={classes.title}>
                {modalTitle}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <form onSubmit={'ADD FUNCTION'} autoComplete="off" className={classes.formWrapper}>
                <div className={classes.wrapperInput}>
                  <TextField
                    label="Result"
                    variant="outlined"
                    id="result"
                    autoComplete="off"
                    name="result"
                    size="small"
                    fullWidth
                  ></TextField>
                </div>
                <div>
                  <VoteButton content={'ADD'} height={1.0} className={classes.button} />
                </div>
              </form>
            </Grid>
            <Grid item xs={3} className={classes.button}>
              {' '}
              <VoteButton content={'REMOVE'} height={1.0} className={classes.button} />
            </Grid>
            <Grid item xs={1}>
              <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
        </div>
        <TableContainer component={Box}>
          <Table size="small" className={classes.table}>
            <TableBody>{children}</TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default TaskEstimatedChart;
