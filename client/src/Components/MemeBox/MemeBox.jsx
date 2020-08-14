import React, { useState, useEffect } from 'react';
import { useSocket } from 'socketio-hooks';
import { Modal, Backdrop, Fade } from '@material-ui/core';

import MemeBoxStyles from './MemeBoxStyles';
import { memeSchema } from './memeSchema';

const MemeBox = () => {
  const classes = MemeBoxStyles();
  const [open, setOpen] = useState(false);
  const [vote, setVote] = useState(null);

  useSocket('MEME', votes => {
    setOpen(true);
    setVote(votes.find(element => element.vote !== null).vote);
  });

  const handleClose = () => {
    setOpen(false);
  };

  const getImg = vote => {
    if (vote && open) {
      let memes = memeSchema.filter(meme => meme.value === getDifficulty(vote));
      return memes[Math.floor(Math.random() * memes.length)].img;
    }
  };

  const getDifficulty = vote => {
    let difficulty;
    switch (true) {
      case vote <= 2:
        difficulty = 'easy';
        break;
      case vote <= 8:
        difficulty = 'medium';
        break;
      case vote > 8:
        difficulty = 'hard';
        break;
      case vote === '∞':
        difficulty = '∞';
        break;
      case vote === ' ?':
        difficulty = '?';
        break;
      case vote === 'C':
        difficulty = 'C';
        break;
      default:
        break;
    }
    return difficulty;
  };

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpen(false);
      }, 2500);
    }
  }, [open]);

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
        <img height="400" alt="Meme" src={getImg(vote)} />
      </Fade>
    </Modal>
  );
};

export default MemeBox;
