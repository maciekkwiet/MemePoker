import React from 'react';
import { useTheme, useMediaQuery } from '@material-ui/core';

import UserNameInput from 'Components/UserNameInput';
import MainBox from 'Components/MainBox';

const RoomJoin = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const isDesktop = !isMobile;

  return (
    <>
      {isDesktop ? (
        <MainBox>
          <UserNameInput />
        </MainBox>
      ) : (
        <MainBox padding={2}>
          <UserNameInput />
        </MainBox>
      )}
    </>
  );
};

export default RoomJoin;
