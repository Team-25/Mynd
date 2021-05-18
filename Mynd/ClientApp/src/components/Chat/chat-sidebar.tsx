import { TextField, Button, Grid, FormControl } from '@material-ui/core';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import Spinner from 'react-spinkit';
import { db, auth } from '../../firebase';
import { v4 as uuidv4 } from 'uuid';
import id from 'date-fns/esm/locale/id/index';
import { NavLink, Link } from 'react-router-dom';

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

  var id;

  const handleMatch = () => (event: React.MouseEvent<HTMLElement>) => {  
    id = uuidv4();
    db.collection("matches").doc(id.toString()).set({});
    db.collection("matches").doc(id).update({timestamp: new Date().toString()});
  };

  // var similarity = require('compute-cosine-similarity');

  // function matchAlgorithm() {
  //   var CurrentUser = user;
  //   var matchingScoreFeelings = 0;
  //   var CurrentHighestMatch = 0;
  //   var userData: any;
  //   var matchData: any;

  //   const users = db.collection("user-data");
  //   const usersQuery = users.where("User Feelings status", "==", true)
  //   var userID = CurrentUser?.uid;
  //   db.collection("user-data").doc(userID).collection("User Feelings status").orderBy("timestamp", "desc").limit(1).get().then(snapshot => {
  //     snapshot.forEach((doc) => {
  //       userData = doc.data().feelings.toString()
  //       console.log(userData);
  //     })
  //   })

  //   usersQuery.get().then(snapshot => {
  //     var MatchID: string;
  //     console.log("banana");
  //     snapshot.docs.forEach(user => {
  //       db.collection("user-data").doc(user.id).collection("User Feelings status").orderBy("timestamp", "desc").limit(1).get().then(snapshot => {
  //         snapshot.forEach((doc) => {
  //           matchData = doc.data().feelings.toString()
  //           console.log("not gonna be here let's be honest");
  //         })
  //       })
  //       matchingScoreFeelings = similarity(userData, matchData);

  //       if (matchingScoreFeelings > CurrentHighestMatch) {
  //         CurrentHighestMatch = matchingScoreFeelings;
  //         MatchID = user.id
  //       }
  //     })
  //     if (CurrentUser != null) {
  //       var currentID = CurrentUser.uid;
  //       db.collection("matches").orderBy("timestamp", "desc").limit(1).get().then(snapshot => {
  //         snapshot.forEach(doc => {
  //           var matchDocID = doc.id
  //           db.collection("matches").doc(matchDocID).update({ user_1: currentID.toString() });
  //           db.collection("matches").doc(matchDocID).update({ user_2: MatchID.toString() });
  //         })
  //       })
  //     }
  //   });
  // }

  return (
    <div className='chat-sidebar'>
      <p> Your Chats: </p>
      {value &&
        value.docs.map((doc) =>
          isInChat(doc, String(user?.uid)) ? (
            <NavLink className="chat-item" to={'/chat/' + doc.id} activeClassName='chat-active'>
              <span>{getName(doc, String(user?.uid))}</span>
            </NavLink>
            // 
            //   className='chat-sidebar-item'
            //   href=
            //   key={doc.id}
            //   color='primary'z
            // >
            //   <p></p>
            // </Button>
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
