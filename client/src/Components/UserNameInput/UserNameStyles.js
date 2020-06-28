import { makeStyles } from '@material-ui/core/styles';

const UserNameStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2em',
    justifyContent: 'center',
  },
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  img: {
    width: '15em',
    height: '15em',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    marginTop: '25px',
  },

  //class=" MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-marginDense MuiInputLabel-outlined"
  wrapperInput: {
    width: '20em',
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
    },
    '& .MuiInputLabel-outlined': {
      textAlign: 'center',
    },
  },
  wrapperButton: { width: '20em', justifyContent: 'center' },
}));

export default UserNameStyles;
