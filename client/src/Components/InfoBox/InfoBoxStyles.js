import { makeStyles } from '@material-ui/core/styles';

const InfoBoxStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    border: `2px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(0.25),
    textAlign: 'center',
  },
}));

export default InfoBoxStyles;
