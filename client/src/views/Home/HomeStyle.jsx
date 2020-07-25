import { makeStyles } from '@material-ui/core/styles';

const HomeStyles = makeStyles(theme => ({
  wrapper: { display: 'flex', flexDirection: 'column' },
  wrapperUserBox: { marginBottom: '2em' },
  wrapperItem: {
    display: 'flex',
    flexDirection: 'row',
    margin: '1em 3em',
    justifyContent: 'space-around',
  },

  wrapperItemColumn: {
    width: '40%',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
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

  divider: {
    marginTop: '2em',
    height: '7em',
    '& .MuiDivider-root': {
      backgroundColor: 'red',
    },

    backgroundColor: 'red',
  },
}));

export default HomeStyles;
