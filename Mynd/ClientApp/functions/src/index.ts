import * as functions from "firebase-functions";
import firebase from 'firebase';
import { db } from "../../src/firebase";

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
  console.log("hello from firebase");
  });

var similarity = require( 'compute-cosine-similarity' );

exports.MatchingAlgo = functions.firestore.document("/matches/{id}")
  .onCreate( async(snapshot) => {
    var CurrentUser = firebase.auth().currentUser;
    var matchingScoreFeelings = 0;
    var CurrentHighestMatch = 0;
    var userData: any;
    var matchData: any;

    const users = db.collection("user-data");
    const usersQuery = users.where("User Feelings status","==", true)
    var userID = CurrentUser?.uid; 
    db.collection("user-data").doc(userID).collection("User Feelings status").orderBy("timestamp", "desc").limit(1).get().then(snapshot => {
        snapshot.forEach((doc) => {
          userData = doc.data().feelings.toString() 
        })
    })
  
    usersQuery.get().then(snapshot => {
      var MatchID: string;  
      snapshot.docs.forEach(user => {
          db.collection("user-data").doc(user.id).collection("User Feelings status").orderBy("timestamp", "desc").limit(1).get().then(snapshot => {
            snapshot.forEach((doc) => {
              matchData = doc.data().feelings.toString() 
            })
          })
          matchingScoreFeelings = similarity(userData, matchData); 
          
          if (matchingScoreFeelings > CurrentHighestMatch) {
            CurrentHighestMatch = matchingScoreFeelings;
            MatchID = user.id  
          }
        })  
        if (CurrentUser != null) {
          var currentID = CurrentUser.uid;
          db.collection("matches").orderBy("timestamp", "desc").limit(1).get().then(snapshot => {
            snapshot.forEach(doc => {
              var matchDocID = doc.id
              db.collection("matches").doc(matchDocID).update({user_1: currentID.toString()}); 
              db.collection("matches").doc(matchDocID).update({user_2: MatchID.toString()}); 
            })
          })
        }  
    })
  });
