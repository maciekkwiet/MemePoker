import React, { useState } from 'react';
import { format } from 'date-fns';

import { Collapse, Box, Typography, IconButton, Table, TableRow, TableBody } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import { historyElementStyles, StyledTableCell, StyledTableRow, MainTableCell } from './HistoryElementStyles';

const HistoryElement = ({ title, finalResult, estimationTime, Analysis, results }) => {
  const [open, setOpen] = useState(false);
  const classes = historyElementStyles();

  const formattedTime = format(new Date(estimationTime), "mm'm' ss's'");

  return (
    <>
      <StyledTableRow onClick={() => setOpen(!open)}>
        <MainTableCell>
          <IconButton className={classes.arrowIcon} aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </MainTableCell>
        <MainTableCell>{title}</MainTableCell>
        <MainTableCell>{finalResult}</MainTableCell>
        <MainTableCell>{formattedTime}</MainTableCell>
      </StyledTableRow>
      <TableRow>
        <StyledTableCell colSpan={4}>
          <Collapse in={open} unmountOnExit>
            <Box my={2}>
              <Box className={classes.analysis}>
                <Box>
                  <Typography component="div">Average:</Typography>
                  <Typography component="div">{Analysis.average}</Typography>
                </Box>
                <Box>
                  <Typography component="div">Median:</Typography>
                  <Typography component="div">{Analysis.median}</Typography>
                </Box>
                <Box>
                  <Typography component="div">Standard deviation:</Typography>
                  <Typography component="div">{Analysis.standardDeviation}</Typography>
                </Box>
              </Box>
            </Box>
            <Box my={2}>
              <Typography variant="button" gutterBottom component="div">
                Votes:
              </Typography>
              <Table size="small">
                <TableBody>
                  {results.map(result => (
                    <StyledTableRow key={result.name}>
                      <StyledTableCell>{result.name}</StyledTableCell>
                      <StyledTableCell>{result.vote}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </StyledTableCell>
      </TableRow>
    </>
  );
};

export default HistoryElement;
