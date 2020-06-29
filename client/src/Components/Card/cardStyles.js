import { makeStyles } from '@material-ui/core/styles';

const CardStyles = makeStyles(() => ({
  root: {
    textAlign: 'center',
    '& img': {
      maxWidth: '100%',
    },
  },
}));

export default CardStyles;
