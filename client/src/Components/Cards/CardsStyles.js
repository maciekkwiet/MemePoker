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
  main: {
    backgroundColor: 'black',
    padding: 5,
  },
  media: {
    backgroundColor: '#FFFF',
    marginBottom: '5px',
    borderRadius: '3px',
    height: 60,
    padding: '1px',
  },

  content: {
    height: 40,
    backgroundColor: theme.palette.primary.main,
    borderRadius: '5px',
    padding: '5px',
  },
  contentText: {
    backgroundColor: 'rgba(0,15,0,0.4)',
    height: '100%',
    borderRadius: '3px',
    border: `2px solid #FFFF`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default CardStyles;
