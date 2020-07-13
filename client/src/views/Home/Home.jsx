import React from 'react';
import HomeStyle from './HomeStyle';
import CreateNewRoom from 'Components/CreateNewRoom/';
import JoinRoom from 'Components/JoinRoom/JoinRoom';
import MainBox from 'Components/MainBox';
import PromotedText from 'Components/PromotedText';

import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

const Home = () => {
  const classes = HomeStyle();
  return (
    <>
      <MainBox className={classes.wrapper}>
        <div className={classes.wrapperUserBox}></div>
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
      </MainBox>
    </>
  );
};

export default Home;
