import { withStyles, makeStyles } from '@material-ui/core/styles';
import { TableCell, TableRow } from '@material-ui/core';

const historyElementStyles = makeStyles(theme => ({
  root: {
    borderBottom: 'none',
  },
  arrowIcon: {
    color: theme.palette.grey[500],
  },
  analysis: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
}));

const StyledTableCell = withStyles(theme => ({
  root: {
    borderBottom: 'none',
    '&.MuiTableCell-sizeSmall': {
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.grey[800],
    },
  },
}))(TableRow);

export { StyledTableRow, StyledTableCell, historyElementStyles };
