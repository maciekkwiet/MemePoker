import { makeStyles } from '@material-ui/core/styles';

const CreateNewRoomStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
  },
  buttonSession: {
    marginTop: '2em',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
      marginTop: '60px',
    },
  },
}));
export default CreateNewRoomStyles;
