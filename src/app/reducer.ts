import _ from 'lodash';
import { IAction, IMainState, ICoordinates, IStatus, Mode, ICell, IVisitedCell } from '../typings';
import { generateGrid, computePath } from '../a-star'
import { SET_CELL_AS_BLOCKED, SET_MODE, SET_START, SET_END, CALCULATE_PATH, CLEAR_GRID } from './actions';

const initialState: IMainState = {
  grid: generateGrid<ICell>(32, 32, { status: 'empty' }),
  mode: Mode.draw,
  start: { row: 2, col: 2 },
  end: { row: 29, col: 29 },
  path: generateGrid<IVisitedCell | undefined>(32, 32, undefined)
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
    case SET_START:
      return { ...state, start: action.payload, mode: Mode.draw };
    case SET_END:
      return { ...state, end: action.payload, mode: Mode.draw };
    case CALCULATE_PATH:
      return { ...state, path: computePath(state.grid, state.start, state.end) };
    case CLEAR_GRID:
      return initialState;
    default:
      return state;
  }
}