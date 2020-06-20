import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: theme.spacing(5),
    backgroundColor: theme.palette.grey.A400,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '5px',
  },
  main: {
    // alignItems: 'flex-start',
    alignContent: 'flex-start',
    marginRight: 0,
  },
  mainTop: {
    boxSizing: 'border-box',
    marginBottom: theme.spacing(2),
  },
  mainTopBox: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    border: 'none',
  },
  mainTopBoxPaper: {
    padding: theme.spacing(1),
    borderColor: theme.palette.primary.main,
  },
  mainTopInfoBoxes: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    '& > div': {
      marginBottom: '10px',
    },
  },
  avatarLarge: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginRight: theme.spacing(2),
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
  resultsBtnWrap: {
    width: '100%',
    marginTop: 'auto',
    padding: theme.spacing(1),
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '5px',
    '& :last-child': {
      marginTop: theme.spacing(1),
    },
  },
}));

export default useStyles;
