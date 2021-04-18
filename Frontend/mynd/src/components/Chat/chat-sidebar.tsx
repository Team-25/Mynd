import { TextField, Button, Grid, FormControl } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db, auth } from '../../firebase';
import firebase from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';

interface IProps {}

interface IState {}
const ChatSidebar = (props: IProps) => {
  const [value, loading, error] = useCollection(db.collection('chat-rooms'), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  return (
    <div className='chat-sidebar'>
      {value &&
        value.docs.map((doc) => (
          <div key={doc.id}>
            <a href={`/chat/${doc.id}`}> - {doc.id} </a>
          </div>
        ))}
    </div>
  );
};

export default ChatSidebar;
