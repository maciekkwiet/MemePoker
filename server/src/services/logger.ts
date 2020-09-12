const SimpleNodeLogger = require('simple-node-logger'),
  opts = {
    logFilePath: 'logs/mylogfile.log',
    timestampFormat: 'YYYY-MM-DD HH:mm:ss.SSS',
  },
  log = process.env.NODE_ENV == 'production' ? SimpleNodeLogger.createSimpleLogger(opts) : console;
export { log };
