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
    backgroundColor: theme.palette.common.black,
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
const results = [
  {
    id: 1,
    userId: 123,
    username: 'piotrek',
    vote: 5,
  },
  {
    id: 2,
    userId: 124,
    username: 'jan',
    vote: 3,
  },
  {
    id: 3,
    userId: 125,
    username: 'adam',
    vote: 1,
  },
];
const rows = [createData(10, 159, 6.0)];

const TaskEstimationElement = () => {
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
              {results.map(result => (
                <StyledTableRow key={result.userId}>
                  <StyledTableCell align="left">{result.username}</StyledTableCell>
                  <StyledTableCell align="right">{result.vote}</StyledTableCell>
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
