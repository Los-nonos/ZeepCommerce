const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const next = require('next');

const port = parseInt(process.env.WEBSITE_PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// const requireHasherMiddleware = require('./hasher').requireMiddleware;
app.prepare().then(() => {
  const server = express();

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

//TS_NODE_PROJECT=test/tsconfig.json ../../node_modules/mocha/bin/mocha  --require ts-node/register ./test/**/*.tsx tests que dejo acá hasta que se implementen
