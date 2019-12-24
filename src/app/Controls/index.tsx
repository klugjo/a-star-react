import { connect } from 'react-redux';
import { IMainState, ICoordinates } from '../../typings';
import { Dispatch } from 'redux';
import Controls from './Controls';
import { setCellAsBlocked } from '../actions';

const mapStateToProps = (state: IMainState) => ({
  
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
