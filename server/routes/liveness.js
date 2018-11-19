const mongoose = require('mongoose');
const winston = require('winston');

function pingTest(req, res) {
  const { connection } = mongoose;

  connection.collection('liveness').update({
    application: 'fantastic-app',
  }, {
    application: 'fantastic-app',
    time: new Date(),
  }, {
    upsert: true,
  })
    .then(() => {
      res.send('OK');
    }).then(null, (err) => {
      winston.error('error checking liveness', {
        message: err.message,
      });
    });
}

module.exports.autoroute = {
  get: {
    '/liveness_check': pingTest,
  },
};
