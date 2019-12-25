import { connect } from 'react-redux';
import { IMainState, ICoordinates } from '../../typings';
import { Dispatch } from 'redux';
import Grid from './Grid';
import { setCellAsBlocked } from '../actions';

const mapStateToProps = (state: IMainState) => ({
  grid: state.grid,
  start: state.start,
  end: state.end,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCellAsBlocked: (coordinates: ICoordinates) => dispatch(setCellAsBlocked(coordinates))
});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
