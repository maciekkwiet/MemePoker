import { makeStyles, fade } from '@material-ui/core/styles';

const loaderStyles = makeStyles(theme => ({
  root: {
    backgroundColor: fade(theme.palette.grey[900], 0.9),
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  msg: {
    marginTop: theme.spacing(2),
  },
}));

export default loaderStyles;
