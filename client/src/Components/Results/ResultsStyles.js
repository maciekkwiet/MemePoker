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
  },
  btnWrap: {
    width: '100%',
    marginTop: 'auto',
    flexBasis: '20%',
    '& button': {
      marginBottom: theme.spacing(1),
      '&:last-child': {
        marginBottom: 0,
      },
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
