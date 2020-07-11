import { makeStyles } from '@material-ui/core/styles';

const CardStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gridGap: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
}));

export default CardStyles;
