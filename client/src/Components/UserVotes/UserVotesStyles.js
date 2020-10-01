import { makeStyles } from '@material-ui/styles';

const UserVotesStyles = makeStyles(theme => ({
  isNotAdmin: {
    width: '100%',
    height: '32vh',
    display: 'flex',
    flexDirection: 'column',
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: '5px',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '0.4em',
    },
    '&::-webkit-scrollbar-thumb': {
      background: theme.palette.primary.main,
    },
    paddingTop: theme.spacing(1),
  },
  isAdmin: {
    width: '100%',
    height: '27vh',
    display: 'flex',
    flexDirection: 'column',
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: '5px',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '0.4em',
    },
    '&::-webkit-scrollbar-thumb': {
      background: theme.palette.primary.main,
    },
    paddingTop: theme.spacing(1),
  },
  item: {
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing(0, 1, 1, 1),
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
    color: 'white',
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
  vote: {
    marginRight: theme.spacing(1),
  },
}));

export default UserVotesStyles;
