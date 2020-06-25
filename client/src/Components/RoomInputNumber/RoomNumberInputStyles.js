import { makeStyles } from '@material-ui/core/styles';

const FormItem = makeStyles(theme => ({
  inputForm: {
    '& .MuiInputBase-input': {
      textAlign: 'center',
      backgroundColor: theme.palette.secondary.main,
    },
    border: `1px solid #FFFF`,
    borderRadius: '2px',
  },
}));

export { FormItem };
