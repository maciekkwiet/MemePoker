import React from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

import Header from 'Components/Header/Header';
import Footer from 'Components/Footer/Footer';
import theme from '../../theme';

const useStyles = makeStyles((theme) => ({
  Cnt: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

const Template = (props) => {
  const classes = useStyles();

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
