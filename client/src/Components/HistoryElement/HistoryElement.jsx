import React, { useState, Fragment } from 'react';
import { Collapse, Box, Typography, IconButton, Table, TableRow, TableCell, TableBody } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { historyElementStyles, StyledTableCell, StyledTableRow } from './HistoryElementStyles';

const HistoryElement = () => {
  const [open, setOpen] = useState(false);
  const classes = historyElementStyles();

  return (
    <Fragment>
      <StyledTableRow>
        <StyledTableCell>
          <IconButton className={classes.arrowIcon} aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </StyledTableCell>
        <StyledTableCell>Task name</StyledTableCell>
        <StyledTableCell>4</StyledTableCell>
        <StyledTableCell>3m 15s</StyledTableCell>
      </StyledTableRow>
      <TableRow>
        <StyledTableCell colSpan={4}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box my={2}>
              <Box className={classes.analysis}>
                <Box>
                  <Typography component="div">Average:</Typography>
                  <Typography component="div">3.5</Typography>
                </Box>
                <Box>
                  <Typography component="div">Median:</Typography>
                  <Typography component="div">4.0</Typography>
                </Box>
                <Box>
                  <Typography component="div">Standard deviation:</Typography>
                  <Typography component="div">5.5</Typography>
                </Box>
              </Box>
            </Box>
            <Box my={2}>
              <Typography variant="button" gutterBottom component="div">
                Votes:
              </Typography>
              <Table size="small">
                <TableBody>
                  <StyledTableRow>
                    <StyledTableCell>username</StyledTableCell>
                    <StyledTableCell>vote</StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell>username</StyledTableCell>
                    <StyledTableCell>vote</StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell>username</StyledTableCell>
                    <StyledTableCell>vote</StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </StyledTableCell>
      </TableRow>
    </Fragment>
  );
};

export default HistoryElement;
