import { TextField, Button, Grid, FormControl } from '@material-ui/core';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import Spinner from 'react-spinkit';
import { db, auth } from '../../firebase';

interface IProps {}

interface IState {}
const ChatSidebar = (props: IProps) => {
  const [user] = useAuthState(auth);
  const [value, loading, error] = useCollection(db.collection('chat-rooms'), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  if (loading) {
    return (
      <div className='loading'>
        <div className='loadingContents'>
          <Spinner name='ball-spin-fade-loader' color='green' fadeIn='none' />
        </div>
      </div>
    );
  }

  function getName(doc: any, uid: string) {
    let users = Object.keys(doc.data()?.Users);
    users.splice(users.indexOf(uid), 1);
    return doc.data()?.Users[String(users[0])];
  }

  function isInChat(doc: any, uid: string) {
    return Object.keys(doc.data()?.Users).includes(uid);
  }

  
  //a crude way to create a new document with a random ID in firestore
  const handleMatch = () => (event: React.MouseEvent<HTMLElement>) => {
    db.collection("matches").doc((Math.floor(Math.random() * 100000000000000000000) + 1).toString()).set({})
  };

  return (
    <div className='chat-sidebar'>
      <p> Your Chats: </p>
      {value &&
        value.docs.map((doc) =>
          isInChat(doc, String(user?.uid)) ? (
            <Button
              className='chat-sidebar-item'
              href={'/chat/' + doc.id}
              key={doc.id}
              color='primary'
            >
              <p>{getName(doc, String(user?.uid))}</p>
            </Button>
          ) : (
            <></>
          )
        )}
  
            

      <Button variant='contained' color='primary' onClick={handleMatch()}>
            Generate Match
          </Button>

      
    </div>
  );
};

export default ChatSidebar;
