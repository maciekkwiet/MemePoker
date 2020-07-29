import { makeStyles } from '@material-ui/core/styles';

const TaskEstimatedBoxStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    padding: theme.spacing(4),
  },
  headerTitle: {
    display: 'flex',
    flexDirection: 'row',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(0.75),
    color: theme.palette.primary.main,
  },
}));

export default TaskEstimatedBoxStyles;
