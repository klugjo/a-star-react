import _ from 'lodash';
import { IAction, IMainState, ICoordinates, IStatus, Mode, ICell, IVisitedCell } from '../typings';
import { computePath } from '../algo';
import { SET_CELL_AS_BLOCKED, SET_MODE, SET_START, SET_END, CALCULATE_PATH, CLEAR_GRID } from './actions';
import { GRID_SIZE } from './constants';
import { A_STAR } from './presets';

const generateGrid = <T>(numberOfRows: number, numberOfColumns: number, value: T): T[][] => {
  return _.range(numberOfRows).map(() =>
    _.range(numberOfColumns).map(() => (value)));
};

const initialState = (width: number, height: number): IMainState => ({
  grid: A_STAR,
  mode: Mode.draw,
  start: { x: 2, y: 2 },
  end: { x: width -3, y: height - 3 }
});

const changeCellStatus = (state: IMainState, { x: row, y: col }: ICoordinates, status: IStatus): IMainState => {
  const newState = _.cloneDeep(state);
  if (status === 'blocked' && newState.grid[row][col].status === 'blocked') {
    newState.grid[row][col] = { status: 'empty' };
  } else {
    newState.grid[row][col] = { status };
  }
  return newState;
};

export default function (state: IMainState = initialState(GRID_SIZE, 32), action: IAction<any>): IMainState {
  switch (action.type) {
    case SET_CELL_AS_BLOCKED:
      console.log(changeCellStatus(state, action.payload, 'blocked').grid);
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