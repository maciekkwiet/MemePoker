import { makeStyles } from '@material-ui/core/styles';

const navigationStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '& .MuiChip-root': {
      marginRight: theme.spacing(1),
    },
  },
  div: {
    display: 'flex',
    flexDirection: 'row',
  },
}));

export default navigationStyles;
