import { makeStyles } from '@material-ui/core/styles';

const JoinRoomStyles = makeStyles(theme => ({
  formWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  formWrapperInput: {
    width: '40%',
    marginRight: '1em',
    marginTop: '2em',
  },
  formWrapperText: {
    width: '60%',
    marginTop: '2em',
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
