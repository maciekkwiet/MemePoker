import { makeStyles } from '@material-ui/core/styles';

const CreateNewRoomStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
  },
  buttonSession: {
    [theme.breakpoints.up('sm')]: {
      padding: '28px 38px 0px 38px',
      textDecoration: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '1em 0em 2em 0em',
      display: 'flex',
      flexDirection: 'column',
    },
  },
}));
export default CreateNewRoomStyles;
