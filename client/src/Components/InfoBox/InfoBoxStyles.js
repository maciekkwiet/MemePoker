import { makeStyles } from '@material-ui/core/styles';

const InfoBoxStyles = makeStyles((theme) => ({
  paper: {
    border: `2px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(0.25),
    textAlign: 'center',
    '& :first-child': {
      textTransform: 'uppercase',
    },
  },
}));

export default InfoBoxStyles;
