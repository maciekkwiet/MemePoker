import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import { Divider } from '@material-ui/core';

const HomeStyles = makeStyles(theme => ({
  container: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      padding: theme.spacing(8, 2, 0, 2),
    },
  },

  main: {
    width: '100%',
  },

  wrapper: { display: 'flex', flexDirection: 'column' },
  wrapperUserBox: { marginBottom: '2em' },
  wrapperItem: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexDirection: 'row',
      margin: '1em 3em',
      justifyContent: 'space-around',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '1em 0em 0em 0em',
      display: 'flex',
      flexDirection: 'column',
    },
  },
  text: {
    marginBottom: '1em',
  },

  wrapperItemColumn: {
    [theme.breakpoints.up('sm')]: {
      width: '40%',
      textAlign: 'center',
      justifyContent: 'center',
      alignContent: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      textAlign: 'center',
      justifyContent: 'center',
      alignContent: 'center',
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
  },

  divider: {
    marginTop: '2em',
    backgroundColor: theme.palette.primary.main,
    height: '7em',
    [theme.breakpoints.down('sm')]: {
      height: '17em',
      marginLeft: '2em',
      marginRight: '2em',
    },
  },
}));

const CustomDivider = withStyles(theme => ({
  root: {
    marginTop: '2em',
    backgroundColor: theme.palette.primary.main,
    height: '7em',
    [theme.breakpoints.down('sm')]: {
      height: '17em',
      marginLeft: '2em',
      marginRight: '2em',
    },
  },
}))(Divider);

export { HomeStyles, CustomDivider };
