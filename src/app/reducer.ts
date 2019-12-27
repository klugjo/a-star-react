import _ from 'lodash';
import { IAction, IMainState, ICoordinates, IStatus, Mode, ICell, IVisitedCell } from '../typings';
import { generateGrid, computePath } from '../a-star'
import { SET_CELL_AS_BLOCKED, SET_MODE, SET_START, SET_END, CALCULATE_PATH, CLEAR_GRID, CHANGE_GRID_SIZE } from './actions';

const initialState = (width: number, height: number): IMainState => ({
  grid: generateGrid<ICell>(width, height, { status: 'empty' }),
  mode: Mode.draw,
  start: { row: 2, col: 2 },
  end: { row: width -3, col: height - 3 },
  path: generateGrid<IVisitedCell | undefined>(width, height, undefined),
  width,
  height
});

const changeCellStatus = (state: IMainState, { row, col }: ICoordinates, status: IStatus): IMainState => {
  const newState = _.cloneDeep(state);
  newState.grid[row][col] = { status };
  return newState;
};

export default function (state: IMainState = initialState(32, 32), action: IAction<any>): IMainState {
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
      return initialState(state.width, state.height);
      case CHANGE_GRID_SIZE:
        return initialState(action.payload?.width, action.payload?.height);
    default:
      return state;
  }
}