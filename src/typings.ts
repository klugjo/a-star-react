export interface ICell {
  status: 'empty' | 'blocked' | 'searched';
}

export interface IMainState {
  grid: ICell[][];
}

export interface IAction<T = undefined> {
  type: string;
  payload?: T;
} 