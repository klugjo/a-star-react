import _ from 'lodash';
import { IAction, IMainState, ICoordinates, IStatus, Mode, ICell, IVisitedCell } from '../typings';
import { generateGrid, computePath } from '../a-star'
import { SET_CELL_AS_BLOCKED, SET_MODE, SET_START, SET_END, CALCULATE_PATH, CLEAR_GRID } from './actions';
import { GRID_SIZE } from './constants';

const initialState = (width: number, height: number): IMainState => ({
  grid: generateGrid<ICell>(width, height, { status: 'empty' }),
  mode: Mode.draw,
  start: { row: 2, col: 2 },
  end: { row: width -3, col: height - 3 },
  path: generateGrid<IVisitedCell | undefined>(width, height, undefined)
});

const changeCellStatus = (state: IMainState, { row, col }: ICoordinates, status: IStatus): IMainState => {
  const newState = _.cloneDeep(state);
  newState.grid[row][col] = { status };
  return newState;
};

export default function (state: IMainState = initialState(GRID_SIZE, 32), action: IAction<any>): IMainState {
  switch (action.type) {
    case SET_CELL_AS_BLOCKED:
      return changeCellStatus(state, action.payload, 'blocked');
    case SET_MODE:
      return { ...state, mode: action.payload };
    case SET_START:
      return { ...state, start: action.payload, mode: Mode.draw };
    case SET_END:
      return { ...state, end: action.payload, mode: Mode.draw };
    case CALCULATE_PATH:
      return { ...state, path: computePath(state.grid, state.start, state.end) };
    case CLEAR_GRID:
      return initialState(GRID_SIZE, GRID_SIZE);
    default:
      return state;
  }
}