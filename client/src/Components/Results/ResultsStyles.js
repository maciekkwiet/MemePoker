import { makeStyles } from '@material-ui/core/styles';

const ResultsStyles = makeStyles(theme => ({
  root: {
    maxHeight: '100%',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.primary.main}`,
  },
  header: {
    padding: theme.spacing(0.5, 1),
    flexBasis: '10%',
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'uppercase',
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: '5px',
  },
  btnWrap: {
    width: '100%',
    marginTop: 'auto',
    flexBasis: '20%',
    padding: theme.spacing(1, 1, 0),
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: '5px',
    '& button': {
      marginBottom: theme.spacing(1),
    },
  },
  fixedButtons: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(1),
    '& > :nth-child(n)': {
      marginRight: theme.spacing(1),
    },
    '& > :last-child': {
      marginRight: 0,
    },
  },
}));

export default ResultsStyles;
