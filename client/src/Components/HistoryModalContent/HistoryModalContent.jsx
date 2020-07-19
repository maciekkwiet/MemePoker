import React, { forwardRef, Fragment } from 'react';
import {
  IconButton,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Box,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import { historyModalContentStyles, HeadTableCell } from './HistoryModalContentStyles';

const HistoryModalContent = ({ children, onClose, modalTitle }) => {
  const classes = historyModalContentStyles();

  return (
    <Fragment>
      <DialogTitle>{modalTitle}</DialogTitle>
      <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
        <CloseIcon />
      </IconButton>
      <DialogContent className={classes.root}>
        <TableContainer component={Box}>
          <Table size="small">
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
      </DialogContent>
    </Fragment>
  );
};

export default forwardRef((props, ref) => <HistoryModalContent {...props} forwardedRef={ref} />);
