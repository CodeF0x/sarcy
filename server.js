module.exports = function setupServer() {
  const express = require('express');
  const app = express();
  const PORT = process.env.PORT;

  app.use(express.static('docs'));

  app.listen(PORT, () => console.log('Server running.'));
};
