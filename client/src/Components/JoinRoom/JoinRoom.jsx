import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import HomeStyles from '../../views/Home/HomeStyle.jsx';
import VoteButton from 'Components/VoteButton';

import TextField from '@material-ui/core/TextField';

const yup = require('yup');

const Schema = yup.object().shape({
  roomId: yup.number().required(),
});

const JoinRoom = () => {
  const classes = HomeStyles();
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
        <div className={classes.form__wrapper}>
          <div className={classes.form__wrapper__input}>
            <TextField
              className={classes.input}
              label="ROOM'S NUMBER"
              variant="outlined"
              id="room"
              placeholder="ROOM'S NUMBER"
              autoComplete="off"
              name="roomId"
              inputRef={register}
              error={!!errors.roomId}
              size="small"
            ></TextField>
          </div>
          <div className={classes.form__wrapper__text}>
            <VoteButton content={'JOIN SESSION'} height={2.8} />
          </div>
        </div>
      </form>
    </>
  );
};

export default JoinRoom;
