import { TextField, Button, Grid, FormControl } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db, auth } from '../../firebase';
import firebase from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import ChatSidebar from './chat-sidebar';
import { useParams } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import VideoChatContainer from './VideoChatContainer';

interface IProps {}

interface IState {
  message: String;
}
const Chat = (props: IProps) => {
  const { roomId } = useParams<{ roomId: string }>();
  const [user] = useAuthState(auth);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('chat-rooms')
      .doc(roomId)
      .collection('messages')
      .orderBy('createdAt', 'asc')
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc));
      });
    return () => unsubscribe();
  }, [roomId, messages]);

  const handleChange = (e: any) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    if (user && message != '') {
      setMessage('');
      db.collection('chat-rooms').doc(roomId).collection('messages').add({
        text: message,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.uid,
        photo: user.photoURL,
        name: user.displayName,
      });
    }
  };

  return (
    <div className='chat-page-container'>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <ChatSidebar />
        </Grid>
        <Grid item xs={10}>
          <div className='chat-container' id='chat'>
            <div>
              {messages.map((doc) => (
                <div
                  className={
                    user && doc.data().user == user.uid
                      ? 'user message'
                      : 'matcher message'
                  }
                  key={doc.id}
                >
                  <Avatar
                    className='avatar'
                    src={doc.data().photo}
                    alt={doc.data().name}
                  />
                  <p>{doc.data().text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='chat-message-input'>
            <form onChange={handleChange} onSubmit={handleSubmit}>
              <Grid container>
                <Grid item xs={11}>
                  <TextField
                    value={message}
                    className='input-message'
                    fullWidth
                    id='outlined'
                  />
                </Grid>
                <Grid item xs={1}>
                  <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    color='primary'
                  >
                    {' '}
                    Send{' '}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
      <VideoChatContainer />
    </div>
  );
};

export default Chat;
