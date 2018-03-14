/* eslint consistent-return:0 */

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const utils = require('./utils');
const logger = require('./logger');

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
const app = express();

app.use(bodyParser.json());

app.use(cors());

app.post('/items/:id', (req, res) => {
  const rating = req.body.rating;
  const id = req.params.id;
  const resp = utils.write(id, rating);
  if (resp) return res.send(resp);
  return res.status(500).send('could not write result');
});

//  NOTE: Added filter for liked items
app.get('/items', (req, res) => {
  const amt = parseInt(req.query.amt, 10) || 20;
  const page = parseInt(req.query.page, 10) || 1;
  const resp = utils.read(amt, page);
  if (resp) return res.send(resp);
  return res.status(500).send('could not read results');
});

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, prettyHost, url);
    });
  } else {
    logger.appStarted(port, prettyHost);
  }
});
