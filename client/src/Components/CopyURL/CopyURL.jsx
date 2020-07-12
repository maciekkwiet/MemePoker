import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import LinkIcon from '@material-ui/icons/Link';
import CopyURLStyles from './CopyURLStyles';
import Chip from '@material-ui/core/Chip';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

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

  const open = Boolean(anchorEl);
  return (
    <>
      <CopyToClipboard text={url}>
        <div className={classes.wrapperButton}>
          <Chip icon={<LinkIcon />} label={url} onClick={handleClick} color="primary" />
          <Popover
            open={open}
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
