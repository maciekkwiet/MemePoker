import React, { useState } from 'react';
import { Modal, Box, Chip, Dialog, Typography, IconButton } from '@material-ui/core';
import HistoryIcon from '@material-ui/icons/History';
import CloseIcon from '@material-ui/icons/Close';

import historyBoxStyles from './HistoryBoxStyles';
import HistoryModalContent from 'Components/HistoryModalContent/';

const HistoryBox = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = historyBoxStyles();

  return (
    <Box display="inline-block">
      <Chip label="History" icon={<HistoryIcon />} color="primary" onClick={handleOpen} />
      <Modal open={open} className={classes.root}>
        <HistoryModalContent onClose={handleClose}>{children}</HistoryModalContent>
      </Modal>
    </Box>
  );
};

export default HistoryBox;
