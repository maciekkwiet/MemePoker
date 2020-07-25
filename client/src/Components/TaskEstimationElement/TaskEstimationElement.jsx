import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TaskEstimationElementStyles from './TaskEstimationElementStyles';
import Box from '@material-ui/core/Box';

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

function createData(median, average, standardDeviation) {
  return { median, average, standardDeviation };
}

const TaskEstimationElement = ({ users, resultsAnalysis }) => {
  const classes = TaskEstimationElementStyles();

  const rows = [createData(resultsAnalysis.median, resultsAnalysis.average, resultsAnalysis.standardDeviation)];

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
            {rows.map(row => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="center">{row.median}</StyledTableCell>
                <StyledTableCell align="center">{row.average}</StyledTableCell>
                <StyledTableCell align="center">{row.standardDeviation}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <Box my={2}>
          <Typography className={classes.votesTitle} variant="button" gutterBottom component="div">
            Votes:
          </Typography>
          <Table size="small">
            <TableBody>
              {users.map(user => (
                <StyledTableRow>
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
