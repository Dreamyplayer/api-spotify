import type { VercelRequest, VercelResponse } from '@vercel/node';
import { svgComponent } from '../card.js';

export default async (_req: VercelRequest, res: VercelResponse) => {
  const cardComponent = await svgComponent();

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=1');
  res.status(200).send(cardComponent);
};
