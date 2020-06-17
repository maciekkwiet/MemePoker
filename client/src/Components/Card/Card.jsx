import React from 'react';
import { useParams } from 'react-router-dom';
import { useEmit } from 'socketio-hooks';

import { useUserContext } from 'Contexts/UserContext';
// value pochodzi z komponentu Cards i zawiera aktualny numer pokoju
const Card = ({ value }) => {
  //imie current user
  const { name } = useUserContext();
  //wysyłamy funkcję która wyemituje jakies zdażenie po sockecie, zdażenie jest takie jakie podamy do hooka
  const sendEstimation = useEmit('USER_VOTED');
  const { roomId } = useParams();

  //do uczestników z tego samego pokoju wysyłamy informację Imie, wartośc głosu i ID pokoju, czyli na endpoint USER_VOTED wysyłamy informacje naem, value i roomID
  const onClickHandler = () => sendEstimation({ name, value, roomId });

  return (
    <button type="button" onClick={onClickHandler}>
      {value}
    </button>
  );
};

export default Card;
