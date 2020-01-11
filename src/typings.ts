export interface IAction<T = undefined> {
  type: string;
  payload?: T;
}

export interface ICoordinates {
  x: number;
  y: number;
}

export type IStatus = 'empty' | 'blocked';

export type IPreset = 'a-star-text' | 'labyrinth' | 'random' | 'blank';

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
  isClosed: boolean; // is Closed
  isPath: boolean;
  parent?: IVisitedCell;
  counter: number; // Order in which it is checked (for css animation)
  x: number;
  y: number;
}

export interface IMainState {
  grid: ICell[][];
  path?: IVisitedCell[][];
  start: ICoordinates;
  end: ICoordinates;
  mode: Mode;
  preset: IPreset;
}
