import { makeStyles } from '@material-ui/core/styles';

const cardStyles = makeStyles(() => ({
  root: {
    textAlign: 'center',
    '& img': {
      maxWidth: '100%',
    },
  },
}));

export default cardStyles;
