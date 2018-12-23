const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyCjLFRAKigklhsTgzhVaQgi1N-vmJsIKR8",
  authDomain: "commercial-tailers.firebaseapp.com",
  databaseURL: "https://commercial-tailers.firebaseio.com",
  projectId: "commercial-tailers",
  storageBucket: "commercial-tailers.appspot.com",
  messagingSenderId: "791441621655"
});

const db = firebase.firestore();
const settings = ({timestampsInSnapshots: true});
db.settings(settings);
db.enablePersistence()
.catch(function(err) {
  if (err.code == 'failed-precondition') {
    console.log(`offline not working: ${err}` );
  } else if (err.code == 'unimplemented') {
    console.log(`Browser doesn't support it: ${err}` );
  }
});
// Initialize Cloud Firestore through Firebase
// const db = firebase.firestore();
  
  // Disable deprecated features
// db.settings({
//   timestampsInSnapshots: true
// });

console.log(db);
export default  db;