import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

export const Matching = functions.firestore.document("/matches/{id}")
    .onCreate(() => {
      console.log("Hello!");
      return null;
    });
