import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDiG6HZsAN-2mszXK1ICnXYt3WQFVObklc",
  authDomain: "crwn-db-188dc.firebaseapp.com",
  projectId: "crwn-db-188dc",
  storageBucket: "crwn-db-188dc.appspot.com",
  messagingSenderId: "213506603855",
  appId: "1:213506603855:web:1d6aec3c9c92f93cd2233a",
  measurementId: "G-RRG4WR7RQ8",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if the users is not exist
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(snapShot, "hello");
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error.message, "error creating user");
    }
  }
  console.log(userRef, "userREf");
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
