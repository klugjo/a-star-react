import { connect } from 'react-redux';
import { IMainState, Mode } from '../../typings';
import { Dispatch } from 'redux';
import Controls from './Controls';
import * as actions from '../actions';

const mapStateToProps = (state: IMainState) => ({
  mode: state.mode
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setMode: (mode: Mode) => dispatch(actions.setMode(mode)),
  calculatePath: () => dispatch(actions.calculatePath()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
