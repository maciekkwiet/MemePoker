import { makeStyles } from '@material-ui/styles';

const UserVotesStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: '5px',
    overflowY: 'auto',
    paddingTop: theme.spacing(1),
    '&::-webkit-scrollbar': {
      width: '0.4em',
      '&::-webkit-scrollbar-thumb': {
        background: theme.palette.primary.main,
      },
    },
    [theme.breakpoints.down('xs')]: {
      maxHeight: '40vh',
      overflowY: 'scroll',
      margin: theme.spacing(0, 0),
      padding: theme.spacing(1, 0),
      border: 'none',
      borderRadius: 0,
    },
  },
  isNotAdmin: {
    flexBasis: '90%',
    marginBottom: theme.spacing(0),
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '0.4em',
    },
    '&::-webkit-scrollbar-thumb': {
      background: theme.palette.primary.main,
    },
    [theme.breakpoints.down('xs')]: {
      height: 'auto',
    },
  },
  isAdmin: {
    flexBasis: '70%',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '0.4em',
    },
    '&::-webkit-scrollbar-thumb': {
      background: theme.palette.primary.main,
    },
    [theme.breakpoints.down('xs')]: {
      height: 'auto',
    },
  },
  item: {
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing(0, 1, 1, 1),
    padding: theme.spacing(1, 1, 1, 0),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      background: 'none',
    },
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
