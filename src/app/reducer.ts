import { IAction, IMainState } from '../typings';

const initialState: IMainState = {
  grid: [[]]
};

export default function(state: IMainState = initialState, action: IAction<any>): IMainState {
  switch(action.type) {
    case 'TEST':
      return state;
    default:
      return state;
  }
}