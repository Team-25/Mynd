import { TextField, Button, Grid, FormControl  } from '@material-ui/core';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db, auth } from '../../firebase';

interface IProps {
}

interface IState {
}
const ChatSidebar = (props: IProps) => {
    const [user] = useAuthState(auth);
    const [value, loading, error] = useCollection(
        db.collection('chat-rooms'),
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        }
      );

    function getName(doc:any, uid:string) {
        let users = Object.keys(doc.data()?.Users);
        users.splice(users.indexOf(uid),1);
        return doc.data()?.Users[String(users[0])];
    }

    function isInChat(doc:any, uid:string) {
        return Object.keys(doc.data()?.Users).includes(uid);
    }
    
    return (
        <div className="chat-sidebar">
            <p> Your Chats: </p>
            {value && value.docs.map((doc) => (
                isInChat(doc,String(user?.uid)) ? <Button href={'/chat/' + doc.id} key={doc.id} color='secondary'><p>{getName(doc, String(user?.uid))}</p></Button> : <></>
            ))}
        </div>
    )
}

export default ChatSidebar
