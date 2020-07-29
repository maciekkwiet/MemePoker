import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TableCell } from '@material-ui/core';

const TaskEstimatedChartStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
  title: {
    textAlign: 'left',
    justifyContent: 'center',
    color: '#FFFF',
    fontSize: '30px',
    margin: theme.spacing(2),
  },

  button: { width: '15vh', margin: theme.spacing(2) },

  root: {
    position: 'relative',
    backgroundColor: theme.palette.grey.A400,
    padding: theme.spacing(4),
    outline: 'none',
  },

  wrapperInput: {
    marginTop: '1em',
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
