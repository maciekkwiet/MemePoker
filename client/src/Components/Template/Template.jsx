import React from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import Header from 'Components/Header/Header';
import Footer from 'Components/Footer/Footer';
import theme from '../../theme';
import TemplateStyles from './TemplateStyles';

const Template = (props) => {
  const classes = TemplateStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container className={classes.Cnt}>
        <Header />
        {props.children}
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Template;
