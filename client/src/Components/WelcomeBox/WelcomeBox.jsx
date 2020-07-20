import React from 'react';

import WelcomeBoxStyles from './WelcomeBoxStyles';
import InfoBox from 'Components/InfoBox';

const WelcomeBox = () => {
  const classes = WelcomeBoxStyles();

  return <InfoBox title="Welcome Anon" value="" align="left" padding={(2, 0.5)} />;
};

export default WelcomeBox;
