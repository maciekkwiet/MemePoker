import { makeStyles } from '@material-ui/core/styles';

const TaskEstimatedElementStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  votesTitle: {
    marginLeft: theme.spacing(2),
    fontSize: '20px',
  },
}));

export default TaskEstimatedElementStyles;
