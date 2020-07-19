import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Collapse, Box } from '@material-ui/core';

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

const rows = [createData(10, 159, 6.0)];

const useStyles = makeStyles(theme => ({
  taskVotes: {
    margin: theme.spacing(0, 1),
  },
  title: { padding: theme.spacing(1, 1) },
  taskVotesTekst: {
    margin: theme.spacing(1, 1),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: ' center',
    padding: theme.spacing('1', '1'),
  },
  taskVotesUser: { color: '#7FFF00' },
  taskVotes: { color: '	#9400D3' },
  box: { padding: theme.spacing(2, 2) },
}));

const TaskEstimationElement = () => {
  const classes = useStyles();

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
        <TableRow>
          <StyledTableCell colSpan={4}>
            <Collapse unmountOnExit>
              <Box my={2}>
                <Box className={classes.analysis}>
                  <Box>
                    <Typography component="div">Average:</Typography>
                    <Typography component="div">test</Typography>
                  </Box>
                  <Box>
                    <Typography component="div">Median:</Typography>
                    <Typography component="div">test</Typography>
                  </Box>
                  <Box>
                    <Typography component="div">Standard deviation:</Typography>
                    <Typography component="div">test</Typography>
                  </Box>
                </Box>
              </Box>
              <Box my={2}>
                <Typography variant="button" gutterBottom component="div">
                  Votes:
                </Typography>
                <Table size="small">
                  <TableBody>
                    <StyledTableRow>
                      <StyledTableCell>xxxx</StyledTableCell>
                      <StyledTableCell>xxxx</StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </StyledTableCell>
        </TableRow>
      </TableContainer>
    </>
  );
};
export default TaskEstimationElement;
