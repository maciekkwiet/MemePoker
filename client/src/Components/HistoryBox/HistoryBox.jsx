import React, { useState, forwardRef } from 'react';
import { Modal, Box, Chip, Paper } from '@material-ui/core';
import HistoryIcon from '@material-ui/icons/History';

// import ChipButton from 'Components/ChipButton';
import MainBox from 'Components/MainBox';
import InfoBox from 'Components/InfoBox';
import Timer from 'Components/Timer';

const HistoryBox = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const SomeContent = forwardRef((props, ref) => (
    <MainBox {...props} innerRef={ref}>
      <InfoBox title="History" value={<Timer />} align="left" />
    </MainBox>
  ));

  return (
    <Box display="inline-block">
      <Chip label="History" icon={<HistoryIcon />} color="primary" onClick={handleOpen} />

      <Modal open={open} onClose={handleClose}>
        <SomeContent />
      </Modal>
    </Box>
  );
};

export default HistoryBox;
