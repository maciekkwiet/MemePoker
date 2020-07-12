import { makeStyles } from '@material-ui/core/styles';

const mainBoxStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.grey.A400,
    marginBottom: theme.spacing(4),
    borderColor: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
  },
}));

export default mainBoxStyles;
