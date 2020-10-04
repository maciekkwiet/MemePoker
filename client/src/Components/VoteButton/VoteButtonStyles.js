import { makeStyles } from '@material-ui/core/styles';

const VoteButtonStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightBold,
    padding: theme.spacing(1, 2),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(1, 0.5),
    },
  },
}));

export default VoteButtonStyles;
