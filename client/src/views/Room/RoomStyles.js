import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  grid: {
    marginTop: theme.spacing(5),
    backgroundColor: theme.palette.grey.A400,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '5px',
    padding: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0.25),
    },
  },
  main: {
    alignContent: 'flex-start',
    marginRight: 0,
  },
  mainTop: {
    marginBottom: theme.spacing(2),
    alignItems: 'center',
  },
  mainTopInfoBoxes: {
    '& > div': {
      marginBottom: theme.spacing(1),
    },
  },
  cards: {
    backgroundColor: theme.palette.secondary.light,
    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.primary.main}`,
  },
  results: {
    backgroundColor: theme.palette.secondary.main,
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column nowrap',
    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.primary.main}`,
  },
  resultsHeader: {
    display: 'inline-block',
    width: '100%',
    padding: theme.spacing(0.5, 1),
    alignSelf: 'flex-start',
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'uppercase',
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: '5px',
  },
  resultsBtnWrap: {
    width: '100%',
    marginTop: 'auto',
    padding: theme.spacing(1, 1, 0),
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: '5px',
    '& button': {
      marginBottom: theme.spacing(1),
    },
  },
}));

export default useStyles;
