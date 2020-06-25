import { makeStyles } from '@material-ui/core/styles';

const HomeStyles = makeStyles(theme => ({
  headerItem: { marginBottom: '2em' },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '0 3em',
    justifyContent: 'space-around',
  },
  button: {
    weight: '50px',
  },
}));

export default HomeStyles;
