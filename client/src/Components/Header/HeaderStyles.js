import { makeStyles } from '@material-ui/core/styles';

const headerStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 2),
    marginBottom: theme.spacing(4),
  },

  img: {
    display: 'block',
    height: '7em',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

export default headerStyles;
