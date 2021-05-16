import React from 'react';
import {
  createOffer,
  initiateConnection,
  startCall,
  sendAnswer,
  addCandidate,
  initiateLocalStream,
  listenToConnectionEvents,
} from '../../extra/webrtc';
import firebase from 'firebase/app';
import 'firebase/database';
import {
  doOffer,
  doAnswer,
  doLogin,
  doCandidate,
} from '../../extra/firebaseModule';
import 'webrtc-adapter';
import VideoChat from './VideoChat';
import styled from 'styled-components';
import { useCollection } from "react-firebase-hooks/firestore";
import { db, auth } from "../../firebase";

class VideoChatContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      database: null,
      connectedUser: null,
      localStream: null,
      localConnection: null,
    };
    this.localVideoRef = React.createRef();
    this.remoteVideoRef = React.createRef();
  }

  componentDidMount = async () => {
    // getting local video stream
    const localStream = await initiateLocalStream();
    this.localVideoRef.srcObject = localStream;

    const localConnection = await initiateConnection();

    this.setState({
      database: firebase.database(),
      localStream,
      localConnection,
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.database !== nextState.database) {
      return false;
    }
    if (this.state.localStream !== nextState.localStream) {
      return false;
    }
    if (this.state.localConnection !== nextState.localConnection) {
      return false;
    }

    return true;
  }

  startCall = async (username, userToCall) => {
    const { localConnection, database, localStream } = this.state;
    listenToConnectionEvents(
      localConnection,
      username,
      userToCall,
      database,
      this.remoteVideoRef,
      doCandidate,
      this.onEndCall
    );
    // create an offer
    createOffer(
      localConnection,
      localStream,
      userToCall,
      doOffer,
      database,
      username
    );
  };

  onEndCall = () => {
    try {
      this.state.localConnection.removeStream(this.state.localStream);
    } catch (exception) {
      console.error(exception);
    }
    this.state.localConnection.close()
    this.setState({
      connectedUser: null,
    });
    this.componentDidMount()
  }

  onLogin = async (username) => {
    return await doLogin(username, this.state.database, this.handleUpdate);
  };

  setLocalVideoRef = (ref) => {
    this.localVideoRef = ref;
  };

  setRemoteVideoRef = (ref) => {
    this.remoteVideoRef = ref;
  };

  handleUpdate = (calls, username) => {
    const { localConnection, database, localStream } = this.state;
    if (calls) {
      switch (calls.type) {
        case 'offer':
          this.setState({
            connectedUser: calls.from,
          });

          listenToConnectionEvents(
            localConnection,
            username,
            calls.from,
            database,
            this.remoteVideoRef,
            doCandidate,
            this.onEndCall
          );

          sendAnswer(
            localConnection,
            localStream,
            calls,
            doAnswer,
            database,
            username
          );
          break;
        case 'answer':
          this.setState({
            connectedUser: calls.from,
          });
          startCall(localConnection, calls);
          break;
        case 'candidate':
          addCandidate(localConnection, calls);
          break;
        default:
          break;
      }
    }
  };

  getCallerIds = async() => {
    // db.collection("callers").doc("tests").get().then(doc => {
    //   const data = doc.data();
    //   console.log(data);
    //   return(data);
    // });
    let dict = []
    await db.collection("callers").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        dict.push({ 'name': doc.data().name, 'id': doc.data().id });
        //console.log(dict);
      }
        //dict = querySnapshot.docs;//.map(doc => {dict.push(<option value={doc.data().id}>{doc.data().name}</option>)}));
      )
    });
    //console.log(dict);
    return dict;
  }

  render() {
    return (
      <VideoChatContainerStyle>
        <VideoChat
          startCall={this.startCall}
          onLogin={this.onLogin}
          setLocalVideoRef={this.setLocalVideoRef}
          setRemoteVideoRef={this.setRemoteVideoRef}
          connectedUser={this.state.connectedUser}
          onEndCall={this.onEndCall}
          userName={this.props.userName}
          getCallerIds={this.getCallerIds}
        />
      </VideoChatContainerStyle>
    );
  }
}

export default VideoChatContainer;

const VideoChatContainerStyle = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
