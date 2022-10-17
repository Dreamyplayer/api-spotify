export interface MusicType {
  id: number;
  title: string;
  artist: string;
  duration: string;
  coverUrl: string;
}

export const musicData: MusicType[] = [
  {
    id: 1,
    title: `Until I Found You`,
    artist: `Stephen Sachez`,
    duration: `1:03`,
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b273eabddae72a3b1a5ed51d1ac6',
  },
  {
    id: 2,
    title: `Tom's Diner`,
    artist: `AnnenMayKantereit, Giant Rooks`,
    duration: `1:10`,
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b2732186eb1b0b5436f858c0508c',
  },
  {
    id: 3,
    title: `It'll be Okay`,
    artist: `Shawn Mendes`,
    duration: `1:02`,
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b27372355b30dde4b6ded10ef48c',
  },
  {
    id: 4,
    title: `GHOST TOWN`,
    artist: `Benson Boone`,
    duration: `3:13`,
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b273dc94a17624484c674252385b',
  },
  {
    id: 5,
    title: `If By Chance`,
    artist: `Ruth B.`,
    duration: `5:03`,
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b27397e971f3e53475091dc8d707',
  },
];
