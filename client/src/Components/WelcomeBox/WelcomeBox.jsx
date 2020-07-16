import React from 'react';
//import { Paper, Typography } from '@material-ui/core';

//import theme from 'theme';
import WelcomeBoxStyles from './WelcomeBoxStyles';
import InfoBox from 'Components/InfoBox';

const WelcomeBox = () => {
  const classes = WelcomeBoxStyles();

  return <InfoBox title={`Welcome Mike`} value="" align="left" padding={(2, 0.5)} />;
};

export default WelcomeBox;
