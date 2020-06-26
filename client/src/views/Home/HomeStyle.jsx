import { makeStyles } from '@material-ui/core/styles';

const HomeStyles = makeStyles(theme => ({
  wrapper: { display: 'flex', flexDirection: 'column' },
  wrapper__userBox: { marginBottom: '2em' },
  wrapper__item: {
    display: 'flex',
    flexDirection: 'row',
    margin: '1em 3em',
    justifyContent: 'space-around',
  },
  form__wrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  wrapper__item__column: {
    width: '40%',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  form__wrapper__input: {
    width: '40%',
    marginRight: '1em',
    marginTop: '2em',
  },
  form__wrapper__text: {
    width: '60%',
    marginTop: '2em',
  },
  button__session: {
    marginTop: '2em',
    textDecoration: 'none',
  },
  divider: {
    marginTop: '2em',
    backgroundColor: theme.palette.primary.main,
    height: '7em',
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

export default HomeStyles;
