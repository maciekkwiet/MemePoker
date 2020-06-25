import { makeStyles } from '@material-ui/core/styles';

const PromotedTextStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: theme.palette.secondary.light,
    padding: theme.spacing(0.5, 0, 0.5, 0),
    margin: theme.spacing(1, 0, 1, 0),
    textAlign: 'center',
    textTransform: 'uppercase',
    textShadow: '2px 2px 4px black',
    width: '100%',
  },
}));

export default PromotedTextStyles;
