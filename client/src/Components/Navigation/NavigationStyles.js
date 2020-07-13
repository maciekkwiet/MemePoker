import { makeStyles } from '@material-ui/core/styles';

const navigationStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
    '& .MuiChip-root': {
      marginRight: theme.spacing(1),
    },
  },
}));

export default navigationStyles;
