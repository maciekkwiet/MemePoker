import React from 'react';

import { FormItem } from './RoomNumberInputStyles';
import { InputBase } from '@material-ui/core';

const RoomNumberInput = props => {
  const classes = FormItem();

  return (
    <>
      <InputBase
        className={classes.inputForm}
        id="room"
        variant="outlined"
        placeholder="room's number"
        autoComplete="off"
        name="roomnumber"
      ></InputBase>
    </>
  );
};

export default RoomNumberInput;
