import React, { useState } from 'react';
import { Modal, Box, Chip } from '@material-ui/core';
import HistoryIcon from '@material-ui/icons/History';

import historyBoxStyles from './HistoryBoxStyles';
import ModalContent from 'Components/ModalContent/';

const HistoryBox = props => {
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
      <Modal open={open} onClose={handleClose} className={classes.root}>
        <ModalContent>{props.children}</ModalContent>
      </Modal>
    </Box>
  );
};

export default HistoryBox;
