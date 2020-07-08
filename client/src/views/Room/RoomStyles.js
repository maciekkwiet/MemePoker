import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  main: {
    alignContent: 'flex-start',
    marginRight: 0,
  },
  top: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '4fr 1fr 1fr',
    gridColumnGap: theme.spacing(1),
    /* display: 'flex',
    alignItems: 'stretch',
    alignContent: 'stretch',
    justifyContent: 'center', */
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
    },
  },
  info: {
    display: 'flex',
    flexFlow: 'column wrap',
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridColumnGap: theme.spacing(2),
      marginLeft: 0,
      marginTop: theme.spacing(2),
    },
  },
  cards: {
    backgroundColor: theme.palette.secondary.light,
    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));

export default useStyles;
