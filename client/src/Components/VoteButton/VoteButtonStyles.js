import { makeStyles } from '@material-ui/core/styles';

const VoteButtonStyles = makeStyles((theme, height = 2.9) => ({
  root: {
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightBold,
    height: `${height}em`,
  },
}));

export default VoteButtonStyles;
