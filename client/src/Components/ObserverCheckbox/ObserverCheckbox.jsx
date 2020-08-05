import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import observerCheckboxStyles from './ObserverCheckboxStyles';

const CheckboxLabel = ({ checked, handleChange }) => {
  const classes = observerCheckboxStyles();

  return (
    <Tooltip title="If you want to be nobody, click" arrow placement="top-start" className={classes.tooltip}>
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={handleChange} color="primary" />}
        label="Observer"
      />
    </Tooltip>
  );
};

export default CheckboxLabel;
