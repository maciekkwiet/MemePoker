import { makeStyles } from '@material-ui/core/styles';

const JoinRoomStyles = makeStyles(theme => ({
  formWrapper: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'space-around',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
  },
  formWrapperInput: {
    [theme.breakpoints.up('sm')]: {
      marginTop: '2em',
      display: 'flex',
    },
  },
  formWrapperText: {
    [theme.breakpoints.up('sm')]: {
      width: '60%',
      marginLeft: theme.spacing(2),
      textAlign: 'center',
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: theme.spacing(0),
      marginTop: '1em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '1em',
    },
  },
  input: {
    '& .MuiFormLabel-root': {
      textAlign: 'center',
      color: '#FFFF',
      border: '#FFFF',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      textAlign: 'center',
      borderColor: theme.palette.primary.main,
    },
  },
}));

export default JoinRoomStyles;
