import compression from 'compression';
import express, { Express, json } from 'express';
import logger from 'morgan';
import { env } from 'node:process';
import { svgComponent } from './card';

const app: Express = express();

const PORT = env.PORT || 8000;

app.set('port', PORT);

app.use(logger('tiny'));
app.use(json());
app.use(compression());

app.get('/', (_req, res) => {
  res.send('API running 🥳');
});

let player: string;
setInterval(async () => {
  player = await svgComponent();
}, 1e3);

app.get('/api', async (_req, res) => {
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=1');
  res.status(200).send(player);
});

app.listen(PORT, () => {
  console.log(`Express Server started on Port ${app.get('port')} | Environment : ${app.get('env')}`);
});
