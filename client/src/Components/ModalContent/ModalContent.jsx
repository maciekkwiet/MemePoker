import React, { forwardRef } from 'react';
import { Box, Typography } from '@material-ui/core';

import MainBox from 'Components/MainBox';
import modalContentStyles from './ModalContentStyles';

const ModalContent = forwardRef((props, ref) => {
  const classes = modalContentStyles();

  return (
    <MainBox innerRef={ref}>
      <Box className={classes.root}>
        <Typography variant="h6" component="h2" gutterBottom>
          History
        </Typography>
      </Box>
      <Box>{props.children}</Box>
    </MainBox>
  );
});

export default ModalContent;
