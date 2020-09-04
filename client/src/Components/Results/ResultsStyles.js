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
    flexBasis: '20%',
    padding: theme.spacing(1, 1, 0),
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: '5px',
    '& button': {
      marginBottom: theme.spacing(1),
    },
  },
}));

export default ResultsStyles;
