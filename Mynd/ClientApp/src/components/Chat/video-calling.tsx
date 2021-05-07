import { useEffect } from 'react';
import styled from 'styled-components';
import { db } from '../../firebase';

interface IProps {}

const NewsPage = (props: IProps) => {
  const servers = {
    iceServers: [
      {
        urls: [
          'stun:stun1.l.google.com:19302',
          'stun:stun2.l.google.com:19302',
        ],
      },
    ],
    iceCandidatePoolSize: 0,
  };

  const webcamVideo: any = document.getElementById('webcamVideo');
  const callInput: any = document.getElementById('callInput');
  const remoteVideo: any = document.getElementById('remoteVideo');

  let pc = new RTCPeerConnection(servers);
  let localStream: any = null;
  let remoteStream: any = null;

  const webcamButton = async () => {
    localStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    remoteStream = new MediaStream();

    // Push tracks from local stream to peer connection
    localStream.getTracks().forEach((track: any) => {
      pc.addTrack(track, localStream);
    });

    // Pull tracks from remote stream, add to video stream
    pc.ontrack = (event) => {
      event.streams[0].getTracks().forEach((track) => {
        remoteStream.addTrack(track);
      });
    };

    webcamVideo!.srcObject = localStream;
    remoteVideo!.srcObject = remoteStream;
  };

  const callButton = async () => {
    // Reference Firestore collections for signaling
    const callDoc = db.collection('calls').doc();
    const offerCandidates = callDoc.collection('offerCandidates');
    const answerCandidates = callDoc.collection('answerCandidates');

    callInput.value = callDoc.id;

    // Get candidates for caller, save to db
    pc.onicecandidate = (event) => {
      event.candidate && offerCandidates.add(event.candidate.toJSON());
    };

    // Create offer
    const offerDescription = await pc.createOffer();
    await pc.setLocalDescription(offerDescription);

    const offer = {
      sdp: offerDescription.sdp,
      type: offerDescription.type,
    };

    await callDoc.set({ offer });

    // Listen for remote answer
    callDoc.onSnapshot((snapshot: any) => {
      const data = snapshot.data();
      if (!pc.currentRemoteDescription && data?.answer) {
        const answerDescription = new RTCSessionDescription(data.answer);
        pc.setRemoteDescription(answerDescription);
      }
    });

    // When answered, add candidate to peer connection
    answerCandidates.onSnapshot((snapshot: any) => {
      snapshot.docChanges().forEach((change: any) => {
        if (change.type === 'added') {
          const candidate = new RTCIceCandidate(change.doc.data());
          pc.addIceCandidate(candidate);
        }
      });
    });
  };

  const answerButton = async () => {
    const callId = callInput.value;
    const callDoc = db.collection('calls').doc(callId);
    const answerCandidates = callDoc.collection('answerCandidates');
    const offerCandidates = callDoc.collection('offerCandidates');

    pc.onicecandidate = (event) => {
      event.candidate && answerCandidates.add(event.candidate.toJSON());
    };

    const callData = (await callDoc.get()).data();

    const offerDescription = callData?.offer;
    await pc.setRemoteDescription(new RTCSessionDescription(offerDescription));

    const answerDescription = await pc.createAnswer();
    await pc.setLocalDescription(answerDescription);

    const answer = {
      type: answerDescription.type,
      sdp: answerDescription.sdp,
    };

    await callDoc.update({ answer });

    offerCandidates.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        console.log(change);
        if (change.type === 'added') {
          let data = change.doc.data();
          pc.addIceCandidate(new RTCIceCandidate(data));
        }
      });
    });
  };

  const hangupButton = async () => {
    pc.close();
  };

  return (
    <VideoContainer>
      <h1>Test</h1>
      <span>
        <h3>Local Stream</h3>
        <video id='webcamVideo' autoPlay playsInline></video>
      </span>
      <span>
        <h3>Remote Stream</h3>
        <video id='remoteVideo' autoPlay playsInline></video>
      </span>
      <button onClick={webcamButton}>Start webcam</button>
      <h2>2. Create a new Call</h2>
      <button onClick={callButton}>Create Call (offer)</button>

      <h2>3. Join a Call</h2>
      <p>Answer the call from a different browser window or device</p>

      <input id='callInput' />
      <button onClick={answerButton}>Answer</button>

      <h2>4. Hangup</h2>

      <button onClick={hangupButton}>Hangup</button>
    </VideoContainer>
  );
};

export default NewsPage;

const VideoContainer = styled.div``;
