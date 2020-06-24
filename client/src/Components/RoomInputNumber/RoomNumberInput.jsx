import React from 'react';

import { FormItem } from './RoomNumberInputStyles';
import { InputBase } from '@material-ui/core';

const RoomNumberInput = ({ id, placeholder, name, fullWidth }) => {
  const classes = FormItem();

  return (
    <>
      <InputBase
        className={classes.inputForm}
        id={id}
        variant="outlined"
        placeholder={placeholder}
        autoComplete="off"
        name={name}
        fullWidth={fullWidth}
      ></InputBase>
    </>
  );
};

export default RoomNumberInput;
