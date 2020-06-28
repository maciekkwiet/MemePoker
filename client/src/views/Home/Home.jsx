import React from 'react';

import CreateNewRoom from 'Components/CreateNewRoom/';
import JoinRoom from 'Components/JoinRoom/JoinRoom';
import MainBox from 'Components/MainBox';

const Home = () => {
  return (
    <MainBox>
      Home View
      <CreateNewRoom />
      <JoinRoom />
    </MainBox>
  );
};

export default Home;
