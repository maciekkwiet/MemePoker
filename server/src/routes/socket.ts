import * as socketio from 'socket.io';
import * as http from 'http';

import { onUserJoin } from '@controllers/onUserJoin';
import { onUserReconnect } from '@controllers/onUserReconnect';
import { onUserVote } from '@controllers/onUserVote';
import { onNewTask } from '@controllers/onNewTask';
import { onSubmitEstimation } from '@controllers/onSubmitEstimation';
import { onClearVotes } from '@controllers/onClearVotes';
import { onShowVotes } from '@controllers/onShowVotes';
import { onUserLeave } from '@controllers/onUserLeave';
import { onUserKick } from '@controllers/onUserKick';

import { eventHandlerWrapper } from '@middleware/eventHandlerWrapper';
import { auth } from '@middleware/auth';

const socketRouter = (server: http.Server): void => {
  const io = socketio(server);

  io.on('connect', (socket: socketio.Socket): void => {
    socket.use(auth({ io, socket }));

    socket.on('USER_JOIN', eventHandlerWrapper({ io, socket }, onUserJoin));
    socket.on('USER_RECONNECT', eventHandlerWrapper({ io, socket }, onUserReconnect));
    socket.on('USER_VOTE', eventHandlerWrapper({ io, socket }, onUserVote));
    socket.on('NEW_TASK', eventHandlerWrapper({ io, socket }, onNewTask));
    socket.on('SUBMIT_ESTIMATION', eventHandlerWrapper({ io, socket }, onSubmitEstimation));
    socket.on('CLEAR_VOTES', eventHandlerWrapper({ io, socket }, onClearVotes));
    socket.on('SHOW_VOTES', eventHandlerWrapper({ io, socket }, onShowVotes));
    socket.on('USER_DELETE', eventHandlerWrapper({ io, socket }, onUserLeave));
    socket.on('USER_KICK', eventHandlerWrapper({ io, socket }, onUserKick));
  });
};

export { socketRouter };
