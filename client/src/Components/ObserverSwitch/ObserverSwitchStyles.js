import { makeStyles } from '@material-ui/core/styles';

const observerCheckboxStyles = makeStyles(theme => ({
  main: {
    '& .MuiCheckbox-root': {
      color: '#FFFF',
    },
    '& .MuiSwitch-track': {
      border: `solid ${theme.palette.primary.main} 2px`,
    },
  },
  switch: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tooltip: {
    '& .MuiTooltip-tooltip': {
      fontSize: 50,
    },
  },
}));

export default observerCheckboxStyles;
