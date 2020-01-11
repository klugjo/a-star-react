import _ from 'lodash';
import { IAction, IMainState, ICoordinates, IStatus, Mode, IPreset } from '../typings';
import { computePath } from '../algo';
import { SET_CELL_AS_BLOCKED, SET_MODE, SET_START, SET_END, CALCULATE_PATH, CLEAR_GRID, CHANGE_PRESET } from './actions';
import { GRID_SIZE } from './constants';
import { A_STAR, LABYRINTH, BLANK, RANDOM } from './presets';

const initialState = (width: number, height: number): IMainState => ({
  grid: A_STAR,
  mode: Mode.draw,
  start: { x: 2, y: 2 },
  end: { x: width - 3, y: height - 3 },
  preset: 'a-star-text'
});

const changeCellStatus = (state: IMainState, { x: row, y: col }: ICoordinates, status: IStatus): IMainState => {
  const newState = _.cloneDeep(state);
  newState.path = undefined;

  if (status === 'blocked' && newState.grid[row][col].status === 'blocked') {
    newState.grid[row][col] = { status: 'empty' };
  } else {
    newState.grid[row][col] = { status };
  }
  return newState;
};

const changePreset = (state: IMainState, preset?: IPreset): IMainState => {
  if (!preset) { return state; }

  const base = initialState(GRID_SIZE, GRID_SIZE);

  switch (preset) {
    case 'a-star-text':
      return { ...base, grid: A_STAR, preset };
    case 'labyrinth':
      return { ...base, grid: LABYRINTH, preset };
    case 'blank':
      return { ...base, grid: BLANK, preset };
    case 'random':
      return { ...base, grid: RANDOM(), preset };
    default:
      return state;
  }
}

export default function (state: IMainState = initialState(GRID_SIZE, 32), action: IAction<any>): IMainState {
  switch (action.type) {
    case SET_CELL_AS_BLOCKED:
      return changeCellStatus(state, action.payload, 'blocked');
    case SET_MODE:
      return { ...state, mode: action.payload };
    case SET_START:
      return { ...state, start: action.payload, mode: Mode.draw, path: undefined };
    case SET_END:
      return { ...state, end: action.payload, mode: Mode.draw, path: undefined };
    case CALCULATE_PATH:
      return { ...state, path: computePath(state.grid, state.start, state.end) };
    case CLEAR_GRID:
      return changePreset(state, state.preset);
    case CHANGE_PRESET:
      return changePreset(state, action.payload);
    default:
      return state;
  }
}