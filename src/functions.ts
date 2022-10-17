import fetch from 'isomorphic-unfetch';
import { Buffer } from 'node:buffer';
import { musicData, MusicType } from './Music.js';

export const wait = (milliseconds: number) => new Promise(resolve => setTimeout(resolve, milliseconds));

export const randomNoRepeats = (arr: any[]) => {
  let copy = arr.slice(0);
  return (() => {
    if (copy.length < 1) {
      copy = arr.slice(0);
    }
    const index = Math.floor(Math.random() * copy.length);
    const item = copy[index];
    copy.splice(index, 1);
    return item;
  })();
};

export const addZero = (time: any) => {
  return time.toString().length === 1 ? '0' + time : time;
};

export const urltoBase64 = async (url: string): Promise<string> => {
  const res = await fetch(url);
  const buff = await res.arrayBuffer();

  return Buffer.from(buff).toString('base64');
};

export const timeSplit = (time: string) => {
  const mintues = parseInt(time?.split(':')[0]);
  const seconds = parseInt(time?.split(':')[1]);
  const InMs = mintues * 6e4 + seconds * 1e3;
  return InMs;
};

export const randomMusic = () => {
  const { id, title, artist, duration, coverUrl }: MusicType = randomNoRepeats(musicData.filter(arr => arr));

  return { id, title, artist, duration, coverUrl };
};

export function formatDuration(duration: number) {
  const h = Math.floor(duration / 3600);
  const m = Math.floor((duration % 3600) / 60);
  const s = Math.round(duration % 60);
  return [h, m > 9 ? m : h ? '0' + m : m || '0', s > 9 ? s : '0' + s].filter(Boolean).join(':');
}
