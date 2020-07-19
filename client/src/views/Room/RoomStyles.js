import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  mainBox: {
    maxHeight: '100%',
  },
  grid: {
    maxHeight: '100%',
  },
  main: {
    maxHeight: '100%',
    alignContent: 'flex-start',
    marginRight: 0,
  },
  top: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '4fr 1fr 1fr',
    gridColumnGap: theme.spacing(1),
    marginBottom: theme.spacing(2),
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
  results: {
    minHeight: '100%',
  },
}));

export default useStyles;
