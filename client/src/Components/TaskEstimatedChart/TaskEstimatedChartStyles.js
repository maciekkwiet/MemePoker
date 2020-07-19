import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TableCell } from '@material-ui/core';

const TaskEstimatedChartStyles = makeStyles(theme => ({
  headerTitle: {
    alignItems: 'center',
  },
  title: {
    textAlign: 'left',
    justifyContent: 'center',
    color: '#FFFF',
    fontSize: '30px',
  },
  input: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: { justifyContent: 'center', textAlign: 'right', justifyContent: 'center' },
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
    top: theme.spacing(0),
    color: theme.palette.primary.main,
  },
  wrapperInput: {
    width: '8em',
    display: 'flex',
    marginBottom: '1em',
    '& .MuiFormLabel-root': {
      textAlign: 'center',
      color: '#FFFF',
      border: '#FFFF',
    },

    '& .MuiOutlinedInput-notchedOutline': {
      textAlign: 'center',
      borderColor: theme.palette.primary.main,
    },
    '& .MuiInputBase-input': {
      textAlign: 'center',
      width: '20px',
    },
    '& .MuiInputLabel-outlined': {
      textAlign: 'center',
    },
  },
}));
const HeadTableCell = withStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderBottom: 'none',
  },
}))(TableCell);

export { TaskEstimatedChartStyles, HeadTableCell };
