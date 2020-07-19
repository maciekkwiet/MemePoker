import { makeStyles } from '@material-ui/core/styles';

const TaskEstimatedElementStyles = makeStyles(theme => ({
  taskVotes: {
    margin: theme.spacing(0, 1),
  },
  votesTitle: { margin: theme.spacing(0, 2) },
  title: { padding: theme.spacing(1, 1) },
  taskVotesTekst: {
    margin: theme.spacing(1, 1),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: ' center',
    padding: theme.spacing('1', '1'),
  },
  taskVotesUser: { color: '#7FFF00' },
  taskVotes: { color: '	#9400D3' },
  box: { padding: theme.spacing(2, 2) },
}));
export default TaskEstimatedElementStyles;
