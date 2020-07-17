import React, { useState, Fragment } from 'react';
import { Collapse, Box, Typography, IconButton, Table, TableRow, TableBody } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { historyElementStyles, StyledTableCell, StyledTableRow } from './HistoryElementStyles';
import theme from 'theme';

const HistoryElement = props => {
  const { title, finalResult, estimationTime, analysis, results } = props;
  const [open, setOpen] = useState(false);
  const classes = historyElementStyles();
  const mainCellPadding = theme.spacing(1);

  return (
    <Fragment>
      <StyledTableRow>
        <StyledTableCell style={{ padding: mainCellPadding }}>
          <IconButton className={classes.arrowIcon} aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </StyledTableCell>
        <StyledTableCell style={{ padding: mainCellPadding }}>{title}</StyledTableCell>
        <StyledTableCell style={{ padding: mainCellPadding }}>{finalResult}</StyledTableCell>
        <StyledTableCell style={{ padding: mainCellPadding }}>{estimationTime}</StyledTableCell>
      </StyledTableRow>
      <TableRow>
        <StyledTableCell colSpan={4}>
          <Collapse in={open} unmountOnExit>
            <Box my={2}>
              <Box className={classes.analysis}>
                <Box>
                  <Typography component="div">Average:</Typography>
                  <Typography component="div">{analysis?.average}</Typography>
                </Box>
                <Box>
                  <Typography component="div">Median:</Typography>
                  <Typography component="div">{analysis?.median}</Typography>
                </Box>
                <Box>
                  <Typography component="div">Standard deviation:</Typography>
                  <Typography component="div">{analysis?.standardDeviation}</Typography>
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
                    <StyledTableRow key={result.userId}>
                      <StyledTableCell>{result.username}</StyledTableCell>
                      <StyledTableCell>{result.vote}</StyledTableCell>
                    </StyledTableRow>
                  ))}
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
