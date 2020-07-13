import React from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { useEmit } from 'socketio-hooks';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';

import { useUserContext } from 'Contexts/UserContext';
import PromotedText from 'Components/PromotedText/PromotedText';
import UserNameStyles from './UserNameStyles';
import VoteButton from 'Components/VoteButton';
import photo1 from 'Assets/pngfind.com-meme-faces-png-13834.png';
import photo2 from 'Assets/pngfind.com-memes-png-401574.png';

const yup = require('yup');

const Schema = yup.object().shape({
  name: yup.string().required(),
});

const UserNameInput = () => {
  const classes = UserNameStyles();
  const { defaultName, upsertRoomInfo } = useUserContext();
  const { roomId } = useParams();
  const { state } = useLocation();
  const history = useHistory();
  const sendName = useEmit('USER_JOINED');

  const { register, handleSubmit, errors } = useForm({
    validationSchema: Schema,
    defaultValues: {
      name: defaultName,
    },
  });

  const onSubmitHandler = ({ name }) => {
    upsertRoomInfo(roomId, name, state?.isAdmin);
    sendName({ name, roomId });
    history.push(`/room/${roomId}`);
  };

  return (
    <>
      <PromotedText text={`JOIN THE MEETING AS...`} />
      <form onSubmit={handleSubmit(onSubmitHandler)} autoComplete="off">
        <div className={classes.root}>
          <div>
            <img src={photo1} alt="twitter avatar" className={classes.img} />
          </div>
          <div className={classes.wrapper}>
            <div className={classes.wrapperInput}>
              <TextField
                label="NAME"
                variant="outlined"
                id="name"
                placeholder="NAME"
                autoComplete="off"
                name="name"
                inputRef={register}
                error={!!errors.name}
                size="small"
                fullWidth
              ></TextField>
            </div>
            <div className={classes.wrapperButton}>
              <VoteButton content={'JOIN SESSION'} height={2.8} className={classes.wrapperButton} />
            </div>
          </div>
          <div>
            <img src={photo2} alt="twitter avatar" className={classes.img} />
          </div>
        </div>
      </form>
    </>
  );
};

export default UserNameInput;
