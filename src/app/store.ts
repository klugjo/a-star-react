import { createStore, Store } from 'redux';
import reducer from './reducer';
import { IMainState, IAction } from '../typings';

export default function configureStore(): Store<IMainState, IAction<any>> {
  return createStore(
    reducer
  );
}
