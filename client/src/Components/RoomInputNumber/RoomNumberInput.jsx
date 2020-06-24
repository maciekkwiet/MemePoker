import React from 'react';

import { FormItem } from './RoomNumberInputStyles';
import { InputBase } from '@material-ui/core';

const TaskNameInput = ({ id, placeholder, name, fullWidth, height }) => {
  const classes = FormItem({ height });

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

export default TaskNameInput;
