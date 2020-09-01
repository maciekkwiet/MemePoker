import React from 'react';
import { useHistory } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

import { useBackend } from 'hooks/useBackend';

const LeaveRoomButton = () => {
  const leaveRoom = useBackend('USER_DELETE');
  const history = useHistory();

  const handleClick = () => {
    history.push(`/`);
    leaveRoom();
  };

  return (
    <Chip
      icon={<ExitToAppOutlinedIcon />}
      label="Leave room"
      onClick={handleClick}
      variant="outlined"
      color="primary"
    />
  );
};

export default LeaveRoomButton;
