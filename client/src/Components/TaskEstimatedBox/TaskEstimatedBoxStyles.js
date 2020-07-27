import { makeStyles } from '@material-ui/core/styles';

const TaskEstimatedBoxStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  headerTitle: {
    display: 'flex',
    flexDirection: 'row',
  },
}));

export default TaskEstimatedBoxStyles;
