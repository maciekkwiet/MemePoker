import { makeStyles } from '@material-ui/styles';

const UserVotesStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  item: {
    padding: theme.spacing(1, 0),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '& > div': {
      marginRight: theme.spacing(2),
    },
  },
}));

export default UserVotesStyles;
