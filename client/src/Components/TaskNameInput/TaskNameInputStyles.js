import { InputLabel, InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';

const TaskNameInputStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1, 2),
    display: 'inline-flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    borderRadius: '5px',
    '& > label, div': {
      marginRight: theme.spacing(1),
    },
    '& > label': {
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
  },
  btn: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.text.primary,
  },
}));

const CustomLabel = withStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'uppercase',
  },
}))(InputLabel);

const CustomInput = withStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    borderRadius: '5px',
    '& > input': {
      width: '100%',
      padding: theme.spacing(1),
      border: 'none',
      textAlign: 'center',
      '&::placeholder': {
        fontSize: '0.9em',
      },
    },
  },
}))(InputBase);

export { TaskNameInputStyles, CustomLabel, CustomInput };
