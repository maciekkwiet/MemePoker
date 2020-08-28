import React, { useState, useEffect } from 'react';
import { useSocket } from 'socketio-hooks';
import { Modal, Backdrop, Fade } from '@material-ui/core';

import MemeBoxStyles from './MemeBoxStyles';
import { memeSchema } from './memeSchema';

const MemeBox = () => {
  const classes = MemeBoxStyles();
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);

  useSocket('MEME', votes => {
    const filteredVotes = filterOnlyNumbers(votes.map(user => user.vote));
    if (filteredVotes?.length) {
      console.log('tege nie');
      if (areVotesEqual(filteredVotes)) votesEqual(filteredVotes);
      else if (getStandardDeviation(filteredVotes.map(vote => vote)) > 5) votesDeviation();
    }
  });

  const votesEqual = votes => {
    let vote = votes.find(element => element !== null);
    setImage(getImg(vote));
    setOpen(true);
  };

  const votesDeviation = () => {
    setImage(getImg('deviation'));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getImg = vote => {
    if (vote) {
      let memes = memeSchema.filter(meme => meme.value === getDifficulty(vote));
      return memes[Math.floor(Math.random() * memes.length)].img;
    }
  };

  const areVotesEqual = votes => {
    return votes.every((value, index, arr) => {
      return arr[0] === value;
    });
  };

  const getStandardDeviation = array => {
    const n = array.length;
    const mean = array.reduce((a, b) => a + b) / n;
    return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n);
  };

  const filterOnlyNumbers = input => {
    const filtered = input.filter(vote => vote !== null);
    return filtered
      .filter(vote => !isNaN(vote) || vote === '1/2')
      .map(vote => {
        return vote === '1/2' ? 0.5 : parseInt(vote);
      });
  };

  const getDifficulty = vote => {
    let voteType;
    switch (true) {
      case vote <= 2:
        voteType = 'easy';
        break;
      case vote <= 8:
        voteType = 'medium';
        break;
      case vote > 8:
        voteType = 'hard';
        break;
      case vote === 'deviation':
        voteType = 'deviation';
        break;
      default:
        break;
    }
    return voteType;
  };

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpen(false);
      }, 4000);
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
        <img height="400" alt="Meme" src={image} />
      </Fade>
    </Modal>
  );
};

export default MemeBox;
