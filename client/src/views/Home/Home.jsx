import React from 'react';

import CreateNewRoom from 'Components/CreateNewRoom/';
import JoinRoom from 'Components/JoinRoom/JoinRoom';
import ContainerApp from 'Components/ContainerApp';

const Home = () => {
  return (
    <ContainerApp>
      Home View
      <CreateNewRoom />
      <JoinRoom />
    </ContainerApp>
  );
};

export default Home;
