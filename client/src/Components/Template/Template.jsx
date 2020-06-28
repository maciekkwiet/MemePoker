import React from 'react';
import { Container } from '@material-ui/core';

import Header from 'Components/Header/Header';
import Footer from 'Components/Footer/Footer';
import TemplateStyles from './TemplateStyles';

const Template = props => {
  const classes = TemplateStyles();

  return (
    <div>
      <Header />
      <Container className={classes.Cnt}>
        {props.children}
        <Footer />
      </Container>
    </div>
  );
};

export default Template;
