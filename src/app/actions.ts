import { ICoordinates, IAction } from '../typings';

export const SET_CELL_AS_BLOCKED = 'SET_CELL_AS_BLOCKED';
export const SET_CELL_AS_EMPTY = 'SET_CELL_AS_EMPTY';
export const SET_CELL_AS_SEARCHED = 'SET_CELL_AS_SEARCHED';

export const setCellAsBlocked = (payload: ICoordinates): IAction<ICoordinates> => ({
  type: SET_CELL_AS_BLOCKED,
  payload
});
