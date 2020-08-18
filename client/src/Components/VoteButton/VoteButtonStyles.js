import { makeStyles } from '@material-ui/core/styles';

/* const VoteButtonStyles = makeStyles((theme, height = 2.9) => ({
  root: {
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightBold,
    height: `${height}em`,
  },
})); */
const VoteButtonStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightBold,
    padding: theme.spacing(1, 0),
  },
}));

export default VoteButtonStyles;
