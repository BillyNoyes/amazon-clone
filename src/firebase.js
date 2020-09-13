import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDbMweFL8KM4uI59NxBuUlOQNtXKbXP2-k",
  authDomain: "fir-a6e48.firebaseapp.com",
  databaseURL: "https://fir-a6e48.firebaseio.com",
  projectId: "fir-a6e48",
  storageBucket: "fir-a6e48.appspot.com",
  messagingSenderId: "445559460335",
  appId: "1:445559460335:web:08263bf026d010fba3661a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
