export interface IAction<T = undefined> {
  type: string;
  payload?: T;
}

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

export type IPath = Array<Array<IVisitedCell | undefined>>;

export interface ICell {
  status: IStatus;
}

export interface IVisitedCell {
  gCost: number; // distance to start node
  hCost: number; // distance to end node
  fCost: number; // sum of the above
  closed: boolean; // Already
}

export interface IMainState {
  grid: ICell[][];
  path: IPath;
  start: ICoordinates;
  end: ICoordinates;
  mode: Mode;
  width: number;
  height: number;
}
