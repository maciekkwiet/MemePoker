import React from 'react';

import CreateNewRoom from 'Components/CreateNewRoom/';
import JoinRoom from 'Components/JoinRoom/JoinRoom';

const Home = () => {
  return (
    <div>
      Home View
      <CreateNewRoom />
      <JoinRoom />
    </div>
  );
};

export default Home;
