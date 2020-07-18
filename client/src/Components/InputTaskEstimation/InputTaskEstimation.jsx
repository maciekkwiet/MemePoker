import React from 'react';
import InputTaskEstimationStyles from './InputTaskEstimationStyles';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Paper from '@material-ui/core/Paper';

const InputTaskEstimation = () => {
  const classes = InputTaskEstimationStyles();

  return (
    <>
      <InputLabel htmlFor="input-with-icon-adornment">Task result</InputLabel>
      <Input
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <AddCircleOutlineIcon />
          </InputAdornment>
        }
      />
    </>
  );
};

export default InputTaskEstimation;
