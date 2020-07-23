import React, { useState } from 'react';
import { Box, Chip, Dialog } from '@material-ui/core';
import HistoryIcon from '@material-ui/icons/History';
import { useSocket } from 'socketio-hooks';

import HistoryModalContent from 'Components/HistoryModalContent/';
import HistoryElement from 'Components/HistoryElement/HistoryElement';
import { useBackend } from 'hooks/useBackend';
import { useRoomContext } from 'Contexts/RoomContext';

const HistoryBox = () => {
  const { room } = useRoomContext();
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState(room.history);
  const sendEstimation = useBackend('SUBMIT_ESTIMATION');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onClickHandler = () => {
    sendEstimation();
  };

  useSocket('TASK_ARCHIVED', tasks => {
    setHistory(tasks);
    console.log(tasks);
  });

  return (
    <Box display="inline-block">
      <Chip label="Submit estimation" color="primary" onClick={onClickHandler} />
      <Chip label="History" icon={<HistoryIcon />} color="primary" onClick={handleOpen} />
      <Dialog open={open} onClose={handleClose} scroll="paper" fullWidth={true} maxWidth="md">
        <HistoryModalContent onClose={handleClose} modalTitle="History">
          {history.map(({ timeStamp, ...rest }) => (
            <HistoryElement key={timeStamp} {...rest} />
          ))}
        </HistoryModalContent>
      </Dialog>
    </Box>
  );
};

export default HistoryBox;
