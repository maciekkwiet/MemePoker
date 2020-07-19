import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Grid from '@material-ui/core/Grid';

import {
  Typography,
  IconButton,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Box,
  Paper,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import { TaskEstimatedChartStyles, HeadTableCell } from './TaskEstimatedChartStyles';

const TaskEstimatedChart = ({ children, onClose, modalTitle }) => {
  const classes = TaskEstimatedChartStyles();
  return (
    <>
      <Paper className={classes.root}>
        <div className={classes.headerTitle}>
          <Grid container className={classes.input}>
            <Grid className={classes.title} item xs={8}>
              <Typography variant="h6" component="h2" className={classes.title}>
                {modalTitle}
              </Typography>
            </Grid>
            <Grid item xs={2}>
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
            </Grid>
            <Grid item xs={1} className={classes.button}>
              {' '}
              <IconButton color="primary" aria-label="add to shopping cart" fullWidth>
                <AddBoxIcon />
              </IconButton>
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
