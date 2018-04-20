import React, {Component} from 'react';
import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';
import * as userActions from '../actions/userActions';

// userActions.fetchUser()
// userActions.changeName()

class Users extends Component {
  render () {
    return <div>
      {this.props.user.one.name} // Acces au state de mon store
      <button onClick={this.props.userActions.fetchUser}>Change user</button>// Acces aux fonctions/actions de mon store
    </div>
  }
}

const [
  mapStateToProps,
  mapDispatchToProps
] = [
  (state) => ({
    user: state.user
  }),
  (dispatch) => ({
    userActions: bindActionCreators(userActions, dispatch)
  })

]

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);