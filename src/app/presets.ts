import { ICell } from '../typings';
import _ from 'lodash';
import { GRID_SIZE } from './constants';

const E: ICell = { status: 'empty' };
const B: ICell = { status: 'blocked' };

export const BLANK: ICell[][] = _.range(GRID_SIZE).map(() =>_.range(GRID_SIZE).map(() => E));

export const RANDOM: () => ICell[][] = () => _.range(GRID_SIZE).map(() =>_.range(GRID_SIZE).map(() => {
  return Math.random() * 10 < 2 ? B : E
}));

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