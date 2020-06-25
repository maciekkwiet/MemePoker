import React from 'react';
import HomeStyle from './HomeStyle';
import UserBox from '../../Components/UserBox/UserBox';

import CreateNewRoom from 'Components/CreateNewRoom/';
import JoinRoom from 'Components/JoinRoom/JoinRoom';
import ContainerApp from 'Components/ContainerApp';

const Home = () => {
  const classes = HomeStyle();
  return (
    <>
      <ContainerApp className={classes.root}>
        <div>
          <UserBox />
        </div>
        <div className={classes.item}>2</div>
        <div className={classes.item}>3</div>
        <div className={classes.item}>4</div>
      </ContainerApp>

      <CreateNewRoom />
      <JoinRoom />
    </>
  );
};

export default Home;
