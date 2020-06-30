import { makeStyles } from '@material-ui/core/styles';

const JoinRoomStyles = makeStyles(theme => ({
  formWrapper: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
    },
  },
  formWrapperInput: {
    width: '40%',
    marginRight: '1em',
    marginTop: '2em',
  },
  formWrapperText: {
    width: '60%',
    marginTop: '2em',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      width: '120px',
      justifyContent: 'space-between',
      marginLeft: '7px',
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
