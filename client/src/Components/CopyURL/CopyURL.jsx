import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import LinkIcon from '@material-ui/icons/Link';
import CopyURLStyles from './CopyURLStyles';
import Chip from '@material-ui/core/Chip';
import LinkOffIcon from '@material-ui/icons/LinkOff';

const CopyURL = () => {
  const classes = CopyURLStyles();
  const location = useLocation();
  const url = window.location.href;
  const [copyLink, setCopyLink] = useState('false');

  const changeState = () => {
    copyLink === 'false' ? setCopyLink('true') : setCopyLink('false');
    console.log(copyLink);
  };

  return (
    <>
      <CopyToClipboard text={url}>
        <div className={classes.wrapperButton}>
          {copyLink === 'false' ? (
            <Chip icon={<LinkIcon />} label="Copy link text" onClick={changeState} />
          ) : (
            <Chip icon={<LinkOffIcon />} label="The link was copied" disabled />
          )}
        </div>
      </CopyToClipboard>
    </>
  );
};

export default CopyURL;
