import React, { useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckboxLabels() {
  const [state, setState] = useState(false);

  const handleChange = () => {
    setState(!state);
  };

  return (
    <FormControlLabel control={<Checkbox checked={state} onChange={handleChange} color="primary" />} label="Observer" />
  );
}
