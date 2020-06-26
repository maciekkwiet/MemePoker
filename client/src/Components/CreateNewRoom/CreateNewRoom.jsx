import React from 'react';
import { Link } from 'react-router-dom';

import VoteButton from 'Components/VoteButton/index.js';
import HomeStyle from '../../views/Home/HomeStyle.jsx';

const CreateNewRoom = () => {
  const classes = HomeStyle();
  const sessionNumber = Math.round(Math.random() * 100);

  return (
    <>
      <Link to={`/room/${sessionNumber}/join`} style={{ textDecoration: 'none' }}>
        <div className={classes.button__session}>
          <VoteButton content={'START SESSION'} />
        </div>
      </Link>
    </>
  );
};

export default CreateNewRoom;
