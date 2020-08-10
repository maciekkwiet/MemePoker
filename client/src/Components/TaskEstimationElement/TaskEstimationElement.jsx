import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TaskEstimationElementStyles from './TaskEstimationElementStyles';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const TaskEstimationElement = ({ users, resultsAnalysis }) => {
  const classes = TaskEstimationElementStyles();

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Median</StyledTableCell>
              <StyledTableCell align="center">Average</StyledTableCell>
              <StyledTableCell align="center">Standard Deviation</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell align="center">{resultsAnalysis.median}</StyledTableCell>
              <StyledTableCell align="center">{resultsAnalysis.average}</StyledTableCell>
              <StyledTableCell align="center">{resultsAnalysis.standardDeviation}</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
        <Box my={2}>
          <Typography className={classes.votesTitle} variant="button" gutterBottom component="div">
            Votes:
          </Typography>
          <Table size="small">
            <TableBody>
              {users?.map(user => (
                <StyledTableRow key={user.name}>
                  <StyledTableCell align="left">{user.name}</StyledTableCell>
                  <StyledTableCell align="right">{user.vote}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </TableContainer>
    </>
  );
};

export default TaskEstimationElement;
