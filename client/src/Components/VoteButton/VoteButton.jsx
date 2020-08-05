import React from 'react';
import { Button } from '@material-ui/core';

import VoteButtonStyles from './VoteButtonStyles';
import theme from 'theme';

const VoteBtn = ({ variant = 'contained', content, height, btnFunction = () => {} }) => {
  const classes = VoteButtonStyles(theme, height);

  return (
    <Button
      className={classes.root}
      variant={variant}
      color="primary"
      fullWidth
      type="submit"
      onClick={e => btnFunction(e)}
    >
      {content}
    </Button>
  );
};

export default VoteBtn;
