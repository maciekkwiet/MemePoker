import { makeStyles } from '@material-ui/core/styles';

const VoteButtonStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export default VoteButtonStyles;
