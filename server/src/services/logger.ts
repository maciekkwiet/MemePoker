const loggly = require('node-loggly-bulk');

const client =
  process.env.NODE_ENV == 'production'
    ? loggly.createClient({
        token: 'YOUR_APPLICATION_TOKEN',
        subdomain: 'YOUR_SUBDOMAIN',
      })
    : console;

export { client };
