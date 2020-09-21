import React from 'react';
import CreateNewRoom from 'Components/CreateNewRoom/';
import JoinRoom from 'Components/JoinRoom/JoinRoom';
import MainBox from 'Components/MainBox';
import PromotedText from 'Components/PromotedText';
import WelcomeBox from 'Components/WelcomeBox';
import { Box, Container, Typography, useMediaQuery, useTheme } from '@material-ui/core';

import { HomeStyles, CustomDivider } from './HomeStyle';
import { Helmet } from 'react-helmet';

const Home = () => {
  const classes = HomeStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const isDesktop = !isMobile;

  return (
    <>
      <Container className={classes.container} maxWidth="lg">
        <Helmet>
          <title>Home page</title>
        </Helmet>
        <Box className={classes.main}>
          <MainBox className={classes.wrapper}>
            <div className={classes.wrapperUserBox}>
              <WelcomeBox />
            </div>
            <div className={classes.wrapperItem}>
              <PromotedText text={'POINTING SESSION'} />
            </div>
            <div className={classes.wrapperItem}>
              <div className={classes.wrapperItemColumn}>
                <Typography className={classes.text} variant="h6">
                  CREATE NEW SESSION
                </Typography>
                <CreateNewRoom />
              </div>
              {isDesktop && <CustomDivider orientation="vertical" flexItem />}
              <div className={classes.wrapperItemColumn}>
                <Typography className={classes.text} variant="h6">
                  ADD ROOM'S NUMBER
                </Typography>
                <JoinRoom />
              </div>
            </div>
          </MainBox>
        </Box>
      </Container>
    </>
  );
};

export default Home;
