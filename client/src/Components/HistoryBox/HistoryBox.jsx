import React, { useState } from 'react';
import { Modal, Box, Chip } from '@material-ui/core';
import HistoryIcon from '@material-ui/icons/History';

import historyBoxStyles from './HistoryBoxStyles';
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

  const classes = historyBoxStyles();

  return (
    <Box display="inline-block">
      <Chip label="History" icon={<HistoryIcon />} color="primary" onClick={handleOpen} />
      <Modal open={open} className={classes.root} onClose={handleClose}>
        <HistoryModalContent onClose={handleClose} modalTitle="History">
          {tasks.map(({ id, ...rest }) => {
            return <HistoryElement key={id} {...rest} />;
          })}
        </HistoryModalContent>
      </Modal>
    </Box>
  );
};

export default HistoryBox;
