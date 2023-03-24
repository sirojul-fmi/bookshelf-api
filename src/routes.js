const { addbookHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addbookHandler,
  },
];

module.exports = routes;
