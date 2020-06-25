import { makeStyles } from '@material-ui/core/styles';

const HomeStyles = makeStyles(theme => ({
  headerItem: { marginBottom: '2em' },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '1em 3em',
    justifyContent: 'center',
  },
  item2: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 1em',
    width: '50%',
  },
  textR: {
    marginLeft: '1px',
    textAlign: 'center',
  },
  textL: {
    marginLeft: '120px',
    textAlign: 'center',
  },
}));

export default HomeStyles;
