import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import JoinRoomStyles from './JoinRoomStyles';
import VoteButton from 'Components/VoteButton';

import TextField from '@material-ui/core/TextField';

const yup = require('yup');

const Schema = yup.object().shape({
  roomId: yup.number().required(),
});

const JoinRoom = () => {
  const classes = JoinRoomStyles();
  const { register, handleSubmit, errors } = useForm({
    validationSchema: Schema,
  });

  const { push } = useHistory();
  const connectToRoom = ({ roomId }) => {
    push(`/room/${roomId}/join`);
  };

  return (
    <>
      <form onSubmit={handleSubmit(connectToRoom)} autoComplete="off">
        <div className={classes.formWrapper}>
          <div className={classes.formWrapperInput}>
            <TextField
              className={classes.input}
              label="ROOM NUMBER"
              variant="outlined"
              id="room"
              placeholder="ROOM NUMBER"
              autoComplete="off"
              name="roomId"
              inputRef={register}
              error={!!errors.roomId}
              size="small"
            ></TextField>
          </div>
          <div className={classes.formWrapperText}>
            <VoteButton content={'JOIN SESSION'} height={2.8} />
          </div>
        </div>
      </form>
    </>
  );
};

export default JoinRoom;
