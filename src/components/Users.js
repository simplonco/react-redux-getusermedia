import React, {Component} from 'react';
import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';
import * as userActions from '../actions/userActions';

// userActions.fetchUser()
// userActions.changeName()

class Users extends Component {
  render () {
    return <div>
      <img src={this.props.user.avatar} />
      <button onClick={this.props.userActions.fetchUser}>Change user</button>
    </div>
  }
}

const [
  mapStateToProps,
  mapDispatchToProps
] = [
  (state) => ({
    user: state.user.one
  }),
  (dispatch) => ({
    userActions: bindActionCreators(userActions, dispatch)
  })

]

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);