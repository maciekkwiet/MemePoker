import { makeStyles } from '@material-ui/core/styles';

const historyModalContentStyles = theme => ({
  root: {
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(0.5),
    top: theme.spacing(0.5),
    color: theme.palette.primary.main,
  },
});

export default historyModalContentStyles;
