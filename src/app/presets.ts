import { ICell } from '../typings';

const E: ICell = { status: 'empty' };
const B: ICell = { status: 'blocked' };

export const LABYRINTH: ICell[][] = [
  [E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, B, B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E],
  [E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, B, B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E],
  [E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, B, B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E],
  [E, E, E, B, E, E, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, E, E, E],
  [E, E, E, B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, B, E, E, E],
  [E, E, E, B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, B, E, E, E],
  [E, E, E, B, E, E, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, E, E, B, E, E, B, E, E, E],
  [E, E, E, B, E, E, B, E, E, E, E, E, E, E, E, B, B, E, E, E, E, E, E, E, E, B, E, E, B, E, E, E],
  [E, E, E, B, E, E, B, E, E, E, E, E, E, E, E, B, B, E, E, E, E, E, E, E, E, B, E, E, B, E, E, E],
  [E, E, E, B, E, E, B, E, E, B, E, E, B, B, B, B, B, B, B, B, B, B, B, E, E, B, E, E, B, E, E, E],
  [E, E, E, B, E, E, B, E, E, B, E, E, E, E, E, E, E, E, E, E, E, E, B, E, E, B, E, E, B, E, E, E],
  [E, E, E, B, E, E, B, E, E, B, E, E, E, E, E, E, E, E, E, E, E, E, B, E, E, B, E, E, B, E, E, E],
  [E, E, E, B, E, E, B, E, E, B, E, E, B, B, B, B, B, E, E, B, E, E, B, E, E, B, E, E, B, E, E, E],
  [E, E, E, B, E, E, B, E, E, B, E, E, B, E, E, E, E, E, E, B, E, E, B, E, E, B, E, E, B, E, E, E],
  [E, E, E, B, E, E, B, E, E, B, E, E, B, E, E, E, E, E, E, B, E, E, B, E, E, B, E, E, B, E, E, E],
  [E, E, E, B, B, B, B, E, E, B, B, B, B, E, E, E, E, E, E, B, B, B, B, E, E, B, B, B, B, E, E, E],
  [E, E, E, B, B, B, B, E, E, B, B, B, B, E, E, E, E, E, E, B, B, B, B, E, E, B, B, B, B, E, E, E],
  [E, E, E, B, E, E, B, E, E, B, E, E, B, E, E, E, E, E, E, B, E, E, B, E, E, B, E, E, B, E, E, E],
  [E, E, E, B, E, E, B, E, E, B, E, E, B, E, E, E, E, E, E, B, E, E, B, E, E, B, E, E, B, E, E, E],
  [E, E, E, B, E, E, B, E, E, B, E, E, B, E, E, B, B, B, B, B, E, E, B, E, E, B, E, E, B, E, E, E],
  [E, E, E, B, E, E, B, E, E, B, E, E, E, E, E, E, E, E, E, E, E, E, B, E, E, B, E, E, B, E, E, E],
  [E, E, E, B, E, E, B, E, E, B, E, E, E, E, E, E, E, E, E, E, E, E, B, E, E, B, E, E, B, E, E, E],
  [E, E, E, B, E, E, B, E, E, B, B, B, B, B, B, B, B, B, B, B, E, E, B, E, E, B, E, E, B, E, E, E],
  [E, E, E, B, E, E, B, E, E, E, E, E, E, E, E, B, B, E, E, E, E, E, E, E, E, B, E, E, B, E, E, E],
  [E, E, E, B, E, E, B, E, E, E, E, E, E, E, E, B, B, E, E, E, E, E, E, E, E, B, E, E, B, E, E, E],
  [E, E, E, B, E, E, B, E, E, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, E, E, B, E, E, E],
  [E, E, E, B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, B, E, E, E],
  [E, E, E, B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, B, E, E, E],
  [E, E, E, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, E, E, B, E, E, E],
  [E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, B, B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E],
  [E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, B, B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E],
  [E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, B, B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E],
];

export const A_STAR: ICell[][] = [
  [E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E,],
  [E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E,],
  [E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E,],
  [E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E,],
  [E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E,],
  [E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E,],
  [E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E,],
  [E, E, E, E, E, E, E, E, E, E, B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E,],
  [E, E, E, E, E, E, E, E, E, B, B, B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E,],
  [E, E, E, E, E, E, E, E, E, B, E, B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E,],
  [E, E, E, E, E, E, E, E, B, B, E, B, B, E, E, E, E, E, E, E, E, E, E, E, B, E, E, E, E, E, E, E,],
  [E, E, E, E, E, E, E, E, B, E, E, E, B, E, E, E, E, E, E, E, E, B, E, E, B, E, E, B, E, E, E, E,],
  [E, E, E, E, E, E, E, B, B, E, E, E, B, B, E, E, E, E, E, E, E, E, B, E, B, E, B, E, E, E, E, E,],
  [E, E, E, E, E, E, E, B, E, E, E, E, E, B, E, E, E, E, E, E, E, E, E, B, B, B, E, E, E, E, E, E,],
  [E, E, E, E, E, E, B, B, B, B, B, B, B, B, B, E, E, E, E, E, B, B, B, B, B, B, B, B, B, E, E, E,],
  [E, E, E, E, E, E, B, B, B, B, B, B, B, B, B, E, E, E, E, E, E, E, E, B, B, B, E, E, E, E, E, E,],
  [E, E, E, E, E, B, B, E, E, E, E, E, E, E, B, B, E, E, E, E, E, E, B, E, B, E, B, E, E, E, E, E,],
  [E, E, E, E, E, B, E, E, E, E, E, E, E, E, E, B, E, E, E, E, E, B, E, E, B, E, E, B, E, E, E, E,],
  [E, E, E, E, B, B, E, E, E, E, E, E, E, E, E, B, B, E, E, E, E, E, E, E, B, E, E, E, E, E, E, E,],
  [E, E, E, E, B, E, E, E, E, E, E, E, E, E, E, E, B, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E,],
  [E, E, E, B, B, E, E, E, E, E, E, E, E, E, E, E, B, B, E, E, E, E, E, E, E, E, E, E, E, E, E, E,],
  [E, E, E, B, E, E, E, E, E, E, E, E, E, E, E, E, E, B, E, E, E, E, E, E, E, E, E, E, E, E, E, E,],
  [E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E,],
  [E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E,],
  [E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E,],
  [E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E,],
  [E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E,],
  [E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E,],
  [E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E,],
  [E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E,],
  [E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E,],
  [E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E,],
];