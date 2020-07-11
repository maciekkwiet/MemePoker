import React, { forwardRef } from 'react';
import { Box, Typography, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import MainBox from 'Components/MainBox';
import historyModalContentStyles from './HistoryModalContentStyles';
import { withStyles } from '@material-ui/styles';

const HistoryModalContent = withStyles(historyModalContentStyles)(({ forwardedRef, children, onClose, classes }) => {
  return (
    <div className={classes.root}>
      <MainBox innerRef={forwardedRef}>
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" component="h2" gutterBottom>
          History
        </Typography>
        <Box>{children}</Box>
      </MainBox>
    </div>
  );
});

export default forwardRef((props, ref) => <HistoryModalContent {...props} forwardedRef={ref} />);
