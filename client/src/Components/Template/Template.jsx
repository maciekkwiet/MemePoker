import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Header from 'Components/Header/Header';
import Footer from 'Components/Footer/Footer';

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
    <Container className={classes.Cnt}>
      <Header />
      {props.children}
      <Footer />
    </Container>
  );
};

export default Template;
