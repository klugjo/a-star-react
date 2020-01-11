import { connect } from 'react-redux';
import { IMainState, Mode, IPreset } from '../../typings';
import { Dispatch } from 'redux';
import Controls from './Controls';
import * as actions from '../actions';

const mapStateToProps = (state: IMainState) => ({
  mode: state.mode,
  preset: state.preset
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setMode: (mode: Mode) => dispatch(actions.setMode(mode)),
  calculatePath: () => dispatch(actions.calculatePath()),
  clearGrid: () => dispatch(actions.clearGrid()),
  changePreset: (preset: IPreset) => dispatch(actions.changePreset(preset)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
