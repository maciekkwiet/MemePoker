import { makeStyles } from '@material-ui/styles';

const UserVotesStyles = makeStyles(theme => ({
  tab: {
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: '5px',
  },
  isNotAdmin: {
    width: '100%',
    height: '30.5vh',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
  },
  isAdmin: {
    width: '100%',
    height: '25.5vh',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
  },
  item: {
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing(0, 1, 1, 1),
    padding: theme.spacing(1, 1, 1, 0),
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
      margin: theme.spacing(0, 1, 0, 1),
    },
  },
  userInfoVoted: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '& > div': {
      margin: theme.spacing(0, 1, 0, 1),
    },
    color: theme.palette.primary.main,
  },
}));

export default UserVotesStyles;
