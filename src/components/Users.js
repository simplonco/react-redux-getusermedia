import React, {Component} from 'react';
import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';
import * as userActions from '../actions/userActions';

// userActions.fetchUser()
// userActions.changeName()

class Users extends Component {

  componentWillMount () {
    this.setState({
      displayCam: false,
    });
  }

  allowCam = () => {
    this.setState({displayCam: true});
    navigator.getUserMedia(
      {audio: false, video: { width: 200, height: 150 }},
      this.camAllowed,
      this.camRefused
    )
  }

  camAllowed = (stream) => {
    stream = window.URL.createObjectURL(stream);
    this.setState({camUrl: stream});
  }

  camRefused = (err) => (console.log(err))

  playStream = (e) => (e.target.play())

  selfie = () => {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const video = document.querySelector('video');
    const [w, h] = [video.videoWidth, video.videoHeight];
    canvas.width = w;
    canvas.height = h;
    ctx.drawImage(video, 0, 0, w, h);
    this.setState({snapshot: canvas.toDataURL('image/jpeg')});
  }

  updateAvatar = () => {
    this.props.userActions.changeImg(this.state.snapshot);
    this.setState({displayCam: false});
  }  

  render () {
    return <div>
      <div><img src={this.props.user.avatar} /></div>
      <div><button onClick={this.props.userActions.fetchUser}>Change user</button></div>
      <div><button onClick={this.allowCam}>New</button></div>
      { this.state.displayCam &&
          <div>
            <video src={this.state.camUrl} onLoadedMetadata={this.playStream}></video>
            <canvas></canvas>
            <div><button onClick={this.selfie}>Snap</button></div>
            <div><button onClick={this.updateAvatar}>Save</button></div>
          </div>
      }
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