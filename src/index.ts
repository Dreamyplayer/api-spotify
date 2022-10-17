import compression from 'compression';
import { config } from 'dotenv';
import express, { Express, json } from 'express';
import logger from 'morgan';
import { env } from 'node:process';
import { svgComponent } from './card.js';
config();

const app: Express = express();

const PORT = env.PORT || 8080;
const NODE_ENV = env.NODE_ENV || 'Development';

app.set('port', PORT);
app.set('env', NODE_ENV);

app.use(logger('tiny'));
app.use(json());
app.use(compression());

app.use('/', async (_req, res) => {
  const player = await svgComponent();

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=1');
  res.status(200).send(player);
});

app.listen(PORT, () => {
  console.log(`Express Server started on Port ${app.get('port')} | Environment : ${app.get('env')}`);
});
