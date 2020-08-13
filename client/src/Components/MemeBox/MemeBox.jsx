import React, { useState } from 'react';
import { useSocket } from 'socketio-hooks';
import { Modal, Backdrop, Fade, Card } from '@material-ui/core';

import MemeBoxStyles from './MemeBoxStyles';
import { cardsSchema } from './../Cards/cardsSchema';

const MemeBox = () => {
  const classes = MemeBoxStyles();
  const [open, setOpen] = useState(false);
  const [vote, setVote] = useState(null);

  useSocket('MEME', votes => {
    // console.log(votes[0].vote)
    setOpen(true);
    setVote(votes[0].vote);
  });

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <h2>
            {cardsSchema.map(card => (
              <Card key={card.id} {...card} selected={vote === card.id} />
            ))}
          </h2>
        </div>
      </Fade>
    </Modal>
  );
};

export default MemeBox;
