import { IAction, IMainState } from '../typings';
import { createGrid } from '../a-star'

const initialState: IMainState = {
  grid: createGrid(64, 64)
};

export default function(state: IMainState = initialState, action: IAction<any>): IMainState {
  switch(action.type) {
    case 'TEST':
      return state;
    default:
      return state;
  }
}