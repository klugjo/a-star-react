export interface ICoordinates {
  row: number;
  col: number;
}

export type IStatus = 'empty' | 'blocked' | 'searched';
export enum Mode {
  draw,
  setStart,
  setEnd
}

export interface ICell {
  status: IStatus;
}

export interface IAction<T = undefined> {
  type: string;
  payload?: T;
}

export interface IMainState {
  grid: ICell[][];
  start: ICoordinates;
  end: ICoordinates;
  mode: Mode;
}
