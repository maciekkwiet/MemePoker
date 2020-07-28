import React from 'react';
import CreateNewRoom from 'Components/CreateNewRoom/';
import JoinRoom from 'Components/JoinRoom/JoinRoom';
import MainBox from 'Components/MainBox';
import PromotedText from 'Components/PromotedText';
import WelcomeBox from 'Components/WelcomeBox';
import { Typography } from '@material-ui/core';

import { HomeStyles, CustomDivider } from './HomeStyle';

const Home = () => {
  const classes = HomeStyles();
  return (
    <>
      <MainBox className={classes.wrapper}>
        <div className={classes.wrapperUserBox}>
          <WelcomeBox />
        </div>
        <div className={classes.wrapperItem}>
          <PromotedText text={'POINTING SESSION'} />
        </div>
        <div className={classes.wrapperItem}>
          <div className={classes.wrapperItemColumn}>
            <Typography variant="h6">CREATE NEW SESSION</Typography>
            <CreateNewRoom />
          </div>
          <CustomDivider orientation="vertical" flexItem />
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
