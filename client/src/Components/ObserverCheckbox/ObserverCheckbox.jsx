import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const CheckboxLabel = ({ checked, handleChange }) => {
  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={handleChange} color="primary" />}
      label="Observer"
    />
  );
};

export default CheckboxLabel;
