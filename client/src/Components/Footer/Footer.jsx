import React from 'react';

import FooterStyles from './FooterStyles';

const Footer = () => {
  const classes = FooterStyles();

  return <div className={classes.footer}>Footer</div>;
};

export default Footer;
