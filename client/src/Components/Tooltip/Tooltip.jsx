import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

import FooterStyles from './TooltipStyles';

const Footer = () => {
  const classes = FooterStyles();

  return (
    <Tooltip title="Delete">
      <IconButton aria-label="delete"></IconButton>
    </Tooltip>
  );
};

export default Footer;
