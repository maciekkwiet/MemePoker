import React, { forwardRef } from 'react';
import {
  Typography,
  IconButton,
  Container,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Tabs,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import MainBox from 'Components/MainBox';
import historyModalContentStyles from './HistoryModalContentStyles';
import { withStyles } from '@material-ui/styles';

const HistoryModalContent = withStyles(historyModalContentStyles)(({ forwardedRef, children, onClose, classes }) => {
  return (
    <Container maxWidth="md" className={classes.root}>
      <MainBox innerRef={forwardedRef} padding={2} className={classes.container}>
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" component="h2" gutterBottom>
          History
        </Typography>
        <TableContainer component={Box}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Final Result</TableCell>
                <TableCell>Estimation time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{children}</TableBody>
          </Table>
        </TableContainer>
      </MainBox>
    </Container>
  );
});

export default forwardRef((props, ref) => <HistoryModalContent {...props} forwardedRef={ref} />);
