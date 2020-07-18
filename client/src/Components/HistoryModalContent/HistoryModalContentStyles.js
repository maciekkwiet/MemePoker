import { withStyles, makeStyles } from '@material-ui/core/styles';
import { TableCell } from '@material-ui/core';

const historyModalContentStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    backgroundColor: theme.palette.grey.A400,
    width: '60%',
    height: '80vh',
    padding: theme.spacing(2),
    overflow: 'auto',
    border: `1px solid ${theme.palette.primary.main}`,
    outline: 'none',
    [theme.breakpoints.down('md')]: {
      width: '90%',
      height: '90vh',
    },
  },
  table: {
    margin: theme.spacing(3, 0),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(0.75),
    color: theme.palette.primary.main,
  },
}));

const HeadTableCell = withStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderBottom: 'none',
  },
}))(TableCell);

export { historyModalContentStyles, HeadTableCell };
