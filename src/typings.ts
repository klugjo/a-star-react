export interface ICoordinates {
  row: number;
  col: number;
}

export type IStatus = 'empty' | 'blocked' | 'searched';

export interface ICell {
  status: IStatus;
}

export interface IMainState {
  grid: ICell[][];
}

export interface IAction<T = undefined> {
  type: string;
  payload?: T;
} 