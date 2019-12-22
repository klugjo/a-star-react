import _ from 'lodash';
import { IAction, IMainState, ICoordinates, IStatus } from '../typings';
import { createGrid } from '../a-star'
import { SET_CELL_AS_BLOCKED } from './actions';

const initialState: IMainState = {
  grid: createGrid(32, 32)
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
    default:
      return state;
  }
}