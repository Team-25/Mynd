export const doLogin = async (username, database, handleUpdate) => {
  try{
    await database.ref('/calls/' + username).remove();
    console.log('removed /calls/' + username)
  } catch (exception) {
    console.error(exception);
  }
  database.ref('/calls/' + username).on('value', (snapshot) => {
    snapshot.exists() && handleUpdate(snapshot.val(), username);
  });
};

export const doOffer = async (to, offer, database, username) => {
  await database.ref('/calls/' + to).set({
    type: 'offer',
    from: username,
    offer: JSON.stringify(offer),
  });
  console.log('offer from: ' + username + ' to ' + to)
};

export const doAnswer = async (to, answer, database, username) => {
  await database.ref('/calls/' + to).update({
    type: 'answer',
    from: username,
    answer: JSON.stringify(answer),
  });
  console.log('answer set from: ' + username + ' to ' + to)
};

export const doLeaveNotif = async (to, database, username) => {
  await database.ref('/calls/' + to).update({
    type: 'leave',
    from: username,
  });
  console.log('leave notif from: ' + username + ' to ' + to)
};

export const doCandidate = async (to, candidate, database, username) => {
  // send the new candiate to the peer
  await database.ref('/calls/' + to).update({
    type: 'candidate',
    from: username,
    candidate: JSON.stringify(candidate),
  });
  console.log('candidate set from: ' + username + ' to ' + to)
};
