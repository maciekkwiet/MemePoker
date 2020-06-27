import React from 'react';

import HomeStyle from './HomeStyle';
import UserBox from '../../Components/UserBox/UserBox';
import CreateNewRoom from 'Components/CreateNewRoom/';
import JoinRoom from 'Components/JoinRoom/JoinRoom';
import ContainerApp from 'Components/ContainerApp';
import PromotedText from 'Components/PromotedText';

import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

const Home = () => {
  const classes = HomeStyle();
  return (
    <>
      <ContainerApp className={classes.wrapper}>
        <div className={classes.wrapperUserBox}>
          <UserBox
            title={'Hello !'}
            value={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"
            }
          />
        </div>
        <div className={classes.wrapperItem}>
          <PromotedText text={'POINTING SESSION'} />
        </div>
        <div className={classes.wrapperItem}>
          <div className={classes.wrapperItemColumn}>
            <Typography variant="h6">CREATE NEW SESSION</Typography>
            <CreateNewRoom />
          </div>
          <Divider orientation="vertical" flexItem className={classes.divider} />
          <div className={classes.wrapperItemColumn}>
            <Typography variant="h6">ADD ROOM'S NUMBER</Typography>
            <JoinRoom />
          </div>
        </div>
      </ContainerApp>
    </>
  );
};

export default Home;
