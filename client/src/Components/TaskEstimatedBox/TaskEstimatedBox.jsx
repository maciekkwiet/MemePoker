import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  header__wrapper: {
    display: 'flex',
    flexDirection: 'row',
    padding: '1vw 1vw',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    fontSize: '40px',
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [createData('Task Name', 159, 6.0, 24, 4.0)];

const TaskEstimationBox = () => {
  const classes = useStyles();

  return (
    <div>
      <TableContainer component={Paper}>
        <div className={classes.header__wrapper}>
          <Typography className={classes.header}>Task Result</Typography>
        </div>
        <Table className={classes.table} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Task Name</TableCell>
              <TableCell align="center">Avarage</TableCell>
              <TableCell align="center">Median</TableCell>
              <TableCell align="center">Standard Deviation</TableCell>
              <TableCell align="center">Final Result</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.calories}</TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                <TableCell align="center">{row.carbs}</TableCell>
                <TableCell align="center">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default TaskEstimationBox;
