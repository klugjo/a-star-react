import { ICoordinates, IAction, Mode } from '../typings';

export const SET_CELL_AS_BLOCKED = 'SET_CELL_AS_BLOCKED';
export const SET_START = 'SET_START';
export const SET_END = 'SET_END';
export const SET_CELL_AS_EMPTY = 'SET_CELL_AS_EMPTY';
export const SET_CELL_AS_SEARCHED = 'SET_CELL_AS_SEARCHED';
export const SET_MODE = 'SET_MODE';
export const CALCULATE_PATH = 'CALCULATE_PATH';

export const setCellAsBlocked = (payload: ICoordinates): IAction<ICoordinates> => ({
  type: SET_CELL_AS_BLOCKED,
  payload
});

export const setMode = (payload: Mode): IAction<Mode> => ({
  type: SET_MODE,
  payload
});

export const setStart = (payload: ICoordinates): IAction<ICoordinates> => ({
  type: SET_START,
  payload
});

export const setEnd = (payload: ICoordinates): IAction<ICoordinates> => ({
  type: SET_END,
  payload
});

export const calculatePath = (): IAction => ({
  type: CALCULATE_PATH
});
