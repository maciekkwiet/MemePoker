import React from 'react';

import CreateNewRoom from 'Components/CreateNewRoom/';
import JoinRoom from 'Components/JoinRoom/JoinRoom';
import RoomNumberInput from 'Components/RoomInputNumber/RoomNumberInput';

const Home = () => {
  return (
    <div>
      Home View
      <CreateNewRoom />
      <JoinRoom />
      <RoomNumberInput />
    </div>
  );
};

export default Home;
