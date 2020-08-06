import { makeStyles } from '@material-ui/core/styles';

const observerCheckboxStyles = makeStyles(theme => ({
  checkBox: {
    width: '100%',
    '& .MuiCheckbox-root': {
      color: '#FFFF',
    },
    '& .MuiSwitch-track': {
      border: `solid ${theme.palette.primary.main} 2px`,
    },
  },
  test: { display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', alignContent: 'flex-end' },
  tooltip: {
    '& .MuiTooltip-tooltip': {
      fontSize: 50,
    },
  },
}));

export default observerCheckboxStyles;
