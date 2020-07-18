import React, { useState } from 'react';
import { Box, Chip, Dialog } from '@material-ui/core';
import HistoryIcon from '@material-ui/icons/History';

import HistoryModalContent from 'Components/HistoryModalContent/';
import HistoryElement from 'Components/HistoryElement/HistoryElement';
import tasks from './pseudoData';

const HistoryBox = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box display="inline-block">
      <Chip label="History" icon={<HistoryIcon />} color="primary" onClick={handleOpen} />
      <Dialog open={open} onClose={handleClose} scroll="paper" fullWidth="true" maxWidth="md">
        <HistoryModalContent onClose={handleClose} modalTitle="History">
          {tasks.map(({ id, ...rest }) => (
            <HistoryElement key={id} {...rest} />
          ))}
        </HistoryModalContent>
      </Dialog>
    </Box>
  );
};

export default HistoryBox;
