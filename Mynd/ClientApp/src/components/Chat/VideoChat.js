import React from 'react';
import 'firebase/database';
import classnames from 'classnames';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import './VideoChat.scss';

export default class VideoChat extends React.Component {
  constructor(props, state) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userToCall: null,
      username: this.props.userName.uid,
      callers: null,
    };
  }

  componentDidMount = async() => {
    await this.props.getCallerIds().then(result => this.setState({
      callers: result
    }));
    //console.log(this.state.callers);
  }

  onLoginClicked = async () => {
    await this.props.onLogin(this.state.username);
    this.setState({
      isLoggedIn: true,
    });
  };

  onStartCallClicked = () => {
    //this.props.getCallerIds();
    this.props.startCall(this.state.username, this.state.userToCall);
  };

  onEndCallClicked = () => {
    this.props.onEndCall();
  };

  renderVideos = () => {
    return (
      <div className={classnames('videos', { active: this.state.isLoggedIn })}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <label>{this.state.username}</label>
              <div className='videoContainer'>
                <video ref={this.props.setLocalVideoRef} autoPlay muted="muted" playsInline></video>
              </div>
            </div>
            <div className="col-md-6">
              <label>{this.props.connectedUser}</label>
              <div className='videoContainer'>
                <video ref={this.props.setRemoteVideoRef} autoPlay playsInline></video>
              </div>
              <button
                onClick={this.onEndCallClicked}
                id='end-call-btn'
                className='btn btn-danger'>
                End Call
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  renderForms = () => {
    
    if (this.state.callers == null) this.componentDidMount();
    // let optionItems = options.map((please) => { 
    //     return(<option key={please.id} value={please.id}>{please.name}</option>)
    // });
    let optionItems = [];
    if (this.state.callers != null){
      optionItems = this.state.callers.map((e, key) => {
        return <option key={key} value={e.id}>{e.name}</option>;})
    }
    return this.state.isLoggedIn ? (
      <div key='a' className='form'>
        <label>Call to</label>
        <select title="Call to" className="selectpicker" onChange={(e) => this.setState({ userToCall: e.target.value })}>
        <option value="" selected disabled hidden>Choose here</option>
          {optionItems}
        </select>
        {/* <input
          value=''
          type='text'
          onChange={(e) => this.setState({ userToCall: e.target.value })}
        /> */}
        <button
          onClick={this.onStartCallClicked}
          id='call-btn'
          className='btn btn-primary'
        >
          Call
        </button>
      </div>
    ) : (
      <div key='b' className='form'>
        <label>Type a name</label>
        <input
          value={this.state.username}
          type='text'
          onChange={(e) => this.setState({ username: e.target.value })}
          readOnly={true}
        />

        <button
          onClick={this.onLoginClicked}
          id='login-btn'
          className='btn btn-primary'
        >
          Login
        </button>
      </div>
    );
  };

  render() {
    return (
      <VideoContainer>
        {this.props.connectedUser ? null : this.renderForms()}

        {this.renderVideos()}
        
        <Button></Button>
      </VideoContainer>
    );
  }
}

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .form {
  }
`;
