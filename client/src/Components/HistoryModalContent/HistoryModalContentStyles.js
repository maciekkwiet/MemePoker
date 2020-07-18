import { withStyles, makeStyles } from '@material-ui/core/styles';
import { TableCell } from '@material-ui/core';

const historyModalContentStyles = makeStyles(theme => ({
  root: {
    height: '80vh',
    padding: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      height: '90vh',
    },
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
