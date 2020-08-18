import React, { useState } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { useEmit } from 'socketio-hooks';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import TextField from '@material-ui/core/TextField';
import { useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';

import Loader from 'Components/Loader/Loader';
import PromotedText from 'Components/PromotedText/PromotedText';
import VoteButton from 'Components/VoteButton';
import ObserverSwitch from 'Components/ObserverSwitch';
import UserNameStyles from './UserNameStyles';

import photo1 from 'Assets/pngfind.com-meme-faces-png-13834.png';
import photo2 from 'Assets/pngfind.com-memes-png-401574.png';

import { useRoomContext } from 'Contexts/RoomContext';
import { useUserContext } from 'Contexts/UserContext';

const Schema = yup.object().shape({
  name: yup.string().required(),
});

const UserNameInput = () => {
  const defaultName = window.localStorage.getItem('DEFAULT_NAME') ?? '';

  const classes = UserNameStyles();
  const { updateRoomInfo } = useRoomContext();
  const { saveToken } = useUserContext();
  const { roomId } = useParams();
  const { state } = useLocation();
  const history = useHistory();
  const joinRoom = useEmit('USER_JOIN');

  const [isObserver, setObserver] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    validationSchema: Schema,
    defaultValues: {
      name: defaultName,
    },
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const isDesktop = !isMobile;

  const onSubmitHandler = ({ name }) => {
    window.localStorage.setItem('DEFAULT_NAME', name);

    joinRoom({ name, roomId, isAdmin: state?.isAdmin, isObserver }, ({ room, token }) => {
      setIsLoading(false);
      saveToken(token);
      updateRoomInfo(room);
      history.push(`/room/${roomId}`);
    });

    setIsLoading(true);
  };

  const handleChange = () => {
    setObserver(!isObserver);
  };
  if (isLoading) return <Loader text="Loading..." />;

  return (
    <>
      <PromotedText text={`JOIN THE MEETING AS...`} />
      <form onSubmit={handleSubmit(onSubmitHandler)} autoComplete="off">
        <div className={classes.root}>
          <div>
            <img src={photo1} alt="twitter avatar" className={classes.img} />
          </div>
          {/* {isMobile && (
            <div className={classes.wrapperImage}>
              <img src={photo1} alt="twitter avatar" className={classes.img} />
              <img src={photo2} alt="twitter avatar" className={classes.img} />
            </div>
          )} */}
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
              <ObserverSwitch className={classes.checkBox} handleChange={handleChange} checked={isObserver} />
            </div>
            <div className={classes.wrapper}></div>
            <div className={classes.wrapperButton}>
              <VoteButton content={'JOIN SESSION'} height={2.8} />
            </div>
          </div>

          <div>{isDesktop && <img src={photo2} alt="twitter avatar" className={classes.img} />}</div>
        </div>
      </form>
    </>
  );
};

export default UserNameInput;
