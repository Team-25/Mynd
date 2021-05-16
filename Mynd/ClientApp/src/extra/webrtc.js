import { parseCommandLine } from "typescript";

export const createOffer = async (
  connection,
  localStream,
  userToCall,
  doOffer,
  database,
  username
) => {
  try {
    connection.removeStream(localStream);
  } catch (exception) {
    console.error(exception);
  }
  try {
    connection.addStream(localStream);

    const offer = await connection.createOffer({ offerToReceiveAudio: true, offerToReceiveVideo: true });
    await connection.setLocalDescription(offer);

    doOffer(userToCall, offer, database, username);
  } catch (exception) {
    console.error(exception);
  }
};

export const initiateLocalStream = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    return stream;
  } catch (exception) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: false,
        audio: true,
      });
      return stream;
    } catch (exception) {
      console.error(exception);
    }
  }
};
export const initiateConnection = async () => {
  try {
    // using Google public stun server
    var configuration = {
      iceServers: [{ urls: 'stun:stun2.1.google.com:19302' },
      { urls: 'stun:stun01.sipphone.com' },
      { urls: 'stun:stun.ekiga.net' },
      { urls: 'stun:stun.fwdnet.net' },
      { urls: 'stun:stun.ideasip.com' },
      { urls: 'stun:stun.iptel.org' },
      { urls: 'stun:stun.rixtelecom.se' },
      { urls: 'stun:stun.schlund.de' },
      { urls: 'stun:stun.l.google.com:19302' },
      { urls: 'stun:stun1.l.google.com:19302' },
      { urls: 'stun:stun2.l.google.com:19302' },
      { urls: 'stun:stun3.l.google.com:19302' },
      { urls: 'stun:stun4.l.google.com:19302' },
      { urls: 'stun:stunserver.org' },
      { urls: 'stun:stun.softjoys.com' },
      { urls: 'stun:stun.voiparound.com' },
      { urls: 'stun:stun.voipbuster.com' },
      { urls: 'stun:stun.voipstunt.com' },
      { urls: 'stun:stun.voxgratia.org' },
      { urls: 'stun:stun.xten.com' },
      {
        urls: 'turn:numb.viagenie.ca',
        credential: 'muazkh',
        username: 'webrtc@live.com',
      },
      {
        urls: 'turn:192.158.29.39:3478?transport=udp',
        credential: 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
        username: '28224511:1379330808',
      },
      {
        urls: 'turn:192.158.29.39:3478?transport=tcp',
        credential: 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
        username: '28224511:1379330808',
      }],
    };

    const conn = new RTCPeerConnection(configuration);

    return conn;
  } catch (exception) {
    console.error(exception);
  }
};

export const listenToConnectionEvents = (
  conn,
  username,
  remoteUsername,
  database,
  remoteVideoRef,
  doCandidate,
  onEndCall
) => {
  conn.onicecandidate = function (event) {
    if (event.candidate) {
      doCandidate(remoteUsername, event.candidate, database, username);
    }
  };

  // when a remote user adds stream to the peer connection, we display it
  conn.ontrack = function (e) {
    if (remoteVideoRef.srcObject !== e.streams[0]) {
      remoteVideoRef.srcObject = e.streams[0];
    }
  };

  conn.oniceconnectionstatechange = function (event) {
    if (conn.iceConnectionState === "failed" ||
      conn.iceConnectionState === "disconnected" ||
      conn.iceConnectionState === "closed") {
      // Handle the failure
      onEndCall();
    }
  };
};

export const sendAnswer = async (
  conn,
  localStream,
  call,
  doAnswer,
  database,
  username
) => {
  try {
    conn.removeStream(localStream);
  } catch (exception) {
    console.error(exception);
  }
  try {
    conn.addStream(localStream);

    const offer = JSON.parse(call.offer);
    conn.setRemoteDescription(offer);

    // create an answer to an offer
    const answer = await conn.createAnswer({ offerToReceiveAudio: true, offerToReceiveVideo: true });
    conn.setLocalDescription(answer);

    doAnswer(call.from, answer, database, username);
  } catch (exception) {
    console.error(exception);
  }
};

export const startCall = (yourConn, call) => {
  const answer = JSON.parse(call.answer);
  yourConn.setRemoteDescription(answer);
};

export const addCandidate = (yourConn, call) => {
  // apply the new received candidate to the connection
  const candidate = JSON.parse(call.candidate);
  if (candidate) yourConn.addIceCandidate(new RTCIceCandidate(candidate));
};
