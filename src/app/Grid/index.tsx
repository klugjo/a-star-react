import React from 'react';
import { connect } from 'react-redux';
import { IMainState } from '../../typings';
import { Dispatch } from 'redux';
import Grid from './Grid';

const mapStateToProps = (state: IMainState) => ({
  grid: state.grid
});

const mapDispatchToProps = (dispatch: Dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
