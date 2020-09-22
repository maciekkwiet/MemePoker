import { makeStyles } from '@material-ui/styles';

const UserVotesStyles = makeStyles(theme => ({
  isNotAdmin: {
    flexBasis: '90%',
    marginTop: theme.spacing(2),
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
    flexBasis: '70%',
    margin: theme.spacing(2, 0),
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
