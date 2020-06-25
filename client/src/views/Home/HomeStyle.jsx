import { makeStyles } from '@material-ui/core/styles';

const HomeStyles = makeStyles(theme => ({
  headerItem: { marginBottom: '2em' },
  item: {
    display: 'flex',
    flexDirection: 'row',
    margin: '1em 3em',
  },
  item2: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 1em',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  textR: {
    textAlign: 'center',
    width: '34%',
  },
  textL: {
    textAlign: 'center',
    width: '66%',
  },
}));

export default HomeStyles;
