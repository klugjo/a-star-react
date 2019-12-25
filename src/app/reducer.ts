import _ from 'lodash';
import { IAction, IMainState, ICoordinates, IStatus, Mode } from '../typings';
import { createGrid } from '../a-star'
import { SET_CELL_AS_BLOCKED, SET_MODE } from './actions';

const initialState: IMainState = {
  grid: createGrid(32, 32),
  mode: Mode.draw,
  start: { row: 2, col: 2 },
  end: { row: 29, col: 29 }
};

const changeCellStatus = (state: IMainState, { row, col }: ICoordinates, status: IStatus): IMainState => {
  const newState = _.cloneDeep(state);
  newState.grid[row][col] = { status };
  return newState;
};

export default function (state: IMainState = initialState, action: IAction<any>): IMainState {
  switch (action.type) {
    case SET_CELL_AS_BLOCKED:
      return changeCellStatus(state, action.payload, 'blocked');
    case SET_MODE:
      return { ...state, mode: action.payload };
    default:
      return state;
  }
}