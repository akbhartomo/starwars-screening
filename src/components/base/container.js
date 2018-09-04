import { connect } from 'react-redux';
import { Base } from './component';

export const mapStateToProps = state => state.base;
export const mapDispatchToProps = dispatch => ({
  /* The code are receives from action */
});

export const BaseWrapper = connect(
  mapStateToProps, 
  mapDispatchToProps
)(Base);

export default BaseWrapper;
