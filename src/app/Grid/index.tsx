import { connect } from 'react-redux';
import { IMainState, ICoordinates } from '../../typings';
import { Dispatch } from 'redux';
import Grid from './Grid';
import { setCellAsBlocked, setStart, setEnd } from '../actions';

const mapStateToProps = (state: IMainState) => ({
  grid: state.grid,
  start: state.start,
  end: state.end,
  mode: state.mode
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCellAsBlocked: (coordinates: ICoordinates) => dispatch(setCellAsBlocked(coordinates)),
  setStart: (coordinates: ICoordinates) => dispatch(setStart(coordinates)),
  setEnd: (coordinates: ICoordinates) => dispatch(setEnd(coordinates)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
