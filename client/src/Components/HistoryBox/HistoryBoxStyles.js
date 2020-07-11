import { makeStyles } from '@material-ui/core/styles';

const userBoxStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.secondary.contrastText,
  },
}));

export default userBoxStyles;
