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
import { historyModalContentStyles, HeadTableCell } from './HistoryModalContentStyles';
import { withStyles } from '@material-ui/styles';

const HistoryModalContent = withStyles(historyModalContentStyles)(({ forwardedRef, children, onClose, classes }) => {
  return (
    <Tabs
      innerRef={forwardedRef}
      className={classes.root}
      orientation="vertical"
      variant="scrollable"
      value={false}
      scrollButtons="off"
    >
      <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
        <CloseIcon />
      </IconButton>
      <Typography variant="h6" component="h2" className={classes.title}>
        History
      </Typography>
      <TableContainer component={Box}>
        <Table size="small" className={classes.table}>
          <TableHead>
            <TableRow>
              <HeadTableCell></HeadTableCell>
              <HeadTableCell>Title</HeadTableCell>
              <HeadTableCell>Final Result</HeadTableCell>
              <HeadTableCell>Estimation time</HeadTableCell>
            </TableRow>
          </TableHead>
          <TableBody>{children}</TableBody>
        </Table>
      </TableContainer>
    </Tabs>
  );
});

export default forwardRef((props, ref) => <HistoryModalContent {...props} forwardedRef={ref} />);
