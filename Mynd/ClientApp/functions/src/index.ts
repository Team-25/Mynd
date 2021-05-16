import functions = require('firebase-functions');

export const Matching = functions.firestore
  .document('/matches/{id}')
  .onCreate(() => {
    console.log('Hello!');
    return null;
  });

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase!');
});
