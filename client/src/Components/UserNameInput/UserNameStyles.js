import { makeStyles } from '@material-ui/core/styles';

const UserNameStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'nowrap',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  wrapper: {
    display: 'flex',
    flexBasis: '50%',
    flexDirection: 'column',
    marginTop: '1em',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '50%',
      padding: theme.spacing(0, 2),
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  img: {
    maxHeight: '15em',
    flexBasis: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    marginTop: '25px',
    [theme.breakpoints.down('sm')]: {
      maxHeight: '8em',
      padding: theme.spacing(0, 1),
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(1),
    },
  },

  wrapperImage: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  wrapperInput: {
    width: '60%',
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
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  wrapperButton: {
    width: '40%',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '60%',
    },
  },
}));

export default UserNameStyles;
