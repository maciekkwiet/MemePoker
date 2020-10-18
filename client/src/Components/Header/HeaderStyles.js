import { makeStyles } from '@material-ui/core/styles';

const headerStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 2),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1),
      marginBottom: theme.spacing(2),
    },
  },

  img: {
    display: 'block',
    height: '7em',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down('xs')]: {
      height: '3em',
    },
  },
}));

export default headerStyles;
