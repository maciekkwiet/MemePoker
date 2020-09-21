import { makeStyles } from '@material-ui/core/styles';

const JoinRoomStyles = makeStyles(theme => ({
  formWrapper: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'space-around',
      padding: '28px 38px 0px 38px',
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
      textAlign: 'center',
      justifyContent: 'space-between',
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
    '& .MuiInputBase-input': {
      [theme.breakpoints.down('sm')]: {
        height: '25px',
        width: '80px',
      },
    },
  },
}));

export default JoinRoomStyles;
