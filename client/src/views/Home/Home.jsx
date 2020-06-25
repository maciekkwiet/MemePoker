import React from 'react';
import HomeStyle from './HomeStyle';
import UserBox from '../../Components/UserBox/UserBox';

import CreateNewRoom from 'Components/CreateNewRoom/';
import JoinRoom from 'Components/JoinRoom/JoinRoom';
import ContainerApp from 'Components/ContainerApp';
import PromotedText from 'Components/PromotedText/PromotedText.jsx';
import { Typography } from '@material-ui/core';
import Votebutton from '../../Components/VoteButton/VoteButton';

const Home = () => {
  const classes = HomeStyle();
  return (
    <>
      <ContainerApp className={classes.root}>
        <div className={classes.headerItem}>
          <UserBox />
        </div>
        <div className={classes.item}>
          <PromotedText text={'POINTING SESSION'} />
        </div>
        <div className={classes.item}>
          <Typography display="block" variant="h6">
            CREATE NEW SESSION
          </Typography>
          <Typography display="block" variant="h6">
            ADD ROOM'S NUMBER
          </Typography>
        </div>
        <div className={classes.item}>
          <Votebutton content={'test'} />
          <Votebutton content={'test'} />
          <Votebutton content={'test'} />
        </div>
      </ContainerApp>

      <CreateNewRoom />
      <JoinRoom />
    </>
  );
};

export default Home;
