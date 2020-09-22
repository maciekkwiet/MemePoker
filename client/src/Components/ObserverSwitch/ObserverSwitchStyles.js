import { makeStyles } from '@material-ui/core/styles';

const observerCheckboxStyles = makeStyles(theme => ({
  main: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(1.5),
    '& .MuiCheckbox-root': {
      color: '#FFFF',
    },
    '& .MuiSwitch-track': {
      border: `solid ${theme.palette.primary.main} 2px`,
    },
  },
  switch: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
  },
  tooltip: {
    '& .MuiTooltip-tooltip': {
      fontSize: 50,
    },
  },
}));

export default observerCheckboxStyles;
