const autoroute = require('express-autoroute');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const winston = require('winston');

module.exports = function initialiseServer(app) {
  app.use(morgan('dev'));

  app.use(bodyParser.urlencoded());
  app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

  autoroute(app, {
    routesDir: path.join(__dirname, '/routes'),
    logger: winston,
  });
};
