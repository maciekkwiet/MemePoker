import { makeStyles } from '@material-ui/core/styles';

const ContainerAppStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.grey.A400,
    padding: theme.spacing(4),
    borderColor: theme.palette.primary.main,
  },
}));

export default ContainerAppStyles;
