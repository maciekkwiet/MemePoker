import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import LinkIcon from '@material-ui/icons/Link';
import Chip from '@material-ui/core/Chip';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import CopyURLStyles from './CopyURLStyles';

const CopyURL = () => {
  const classes = CopyURLStyles();
  const url = window.location.href;

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    setTimeout(handleClose, 2000);
  };

  return (
    <>
      <CopyToClipboard text={url}>
        <div className={classes.wrapperButton}>
          <Chip icon={<LinkIcon />} label="Invite others" onClick={handleClick} color="primary" />
          <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography className={classes.root}>The link has been copied to clipboard</Typography>
          </Popover>
        </div>
      </CopyToClipboard>
    </>
  );
};

export default CopyURL;
