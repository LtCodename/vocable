import firebase from "firebase";

const config = {
  apiKey: "AIzaSyD0zWrzlKBzFiS_5z3Hs9VGkRRxwCVTLgI",
  authDomain: "vocable-ltcdnm.firebaseapp.com",
  projectId: "vocable-ltcdnm",
  storageBucket: "vocable-ltcdnm.appspot.com",
  messagingSenderId: "31564557287",
  appId: "1:31564557287:web:05c50e4536ade7c22feb42",
  measurementId: "G-3ZGPJT9CM3",
};

const fire = firebase.initializeApp(config);
export default fire;
