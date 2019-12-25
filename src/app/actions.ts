import { ICoordinates, IAction, Mode } from '../typings';

export const SET_CELL_AS_BLOCKED = 'SET_CELL_AS_BLOCKED';
export const SET_CELL_AS_EMPTY = 'SET_CELL_AS_EMPTY';
export const SET_CELL_AS_SEARCHED = 'SET_CELL_AS_SEARCHED';
export const SET_MODE = 'SET_MODE';

export const setCellAsBlocked = (payload: ICoordinates): IAction<ICoordinates> => ({
  type: SET_CELL_AS_BLOCKED,
  payload
});

export const setMode = (payload: Mode): IAction<Mode> => ({
  type: SET_MODE,
  payload
});
