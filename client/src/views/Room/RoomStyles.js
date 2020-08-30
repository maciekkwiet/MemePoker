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
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      gridColumnStart: 'span 2',
      gridTemplateColumns: '[col1-start] 1fr [col2-start] 1fr [col2-end]',
      gridTemplateRows: '[row1-start] auto [row2-start] auto [row2-end]',
      gridGap: theme.spacing(1),
      '& :first-child': {
        gridColumn: '1 / 3',
        gridRow: '1',
      },
      '& :nth-child(2)': {
        gridColumn: '1 / 2',
        gridRow: '2',
      },
      '& :last-child': {
        gridColumn: '2 / 3',
        gridRow: '2',
      },
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
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1.5),
    },
  },
}));

export default useStyles;
