import { makeStyles } from '@material-ui/core/styles';

const ResultsStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column nowrap',
    backgroundColor: theme.palette.secondary.main,
    minHeight: '100%',
    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.primary.main}`,
  },
  header: {
    display: 'inline-block',
    width: '100%',
    padding: theme.spacing(0.5, 1),
    marginBottom: theme.spacing(2),
    alignSelf: 'flex-start',
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'uppercase',
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: '5px',
  },
  btnWrap: {
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

export default ResultsStyles;
