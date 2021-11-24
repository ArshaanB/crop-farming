// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { createUser } from 'utils/user-details';
import { createBalances } from 'utils/financial-details';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_AUTH_API_KEY,
  authDomain: 'cropfarming-c88dd.firebaseapp.com',
  projectId: 'cropfarming-c88dd',
  storageBucket: 'cropfarming-c88dd.appspot.com',
  messagingSenderId: '985251351844',
  appId: '1:985251351844:web:1b1312eea630485a2eb7b1',
  measurementId: 'G-DCM19TQV2S',
  databaseURL: 'https://cropfarming-c88dd-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
// const app =
initializeApp(firebaseConfig);
const auth = getAuth();

const localStorageKey = '__auth_provider_token__';

async function getToken() {
  return window.localStorage.getItem(localStorageKey);
}

function handleUserResponse(allDetails) {
  const userToken = allDetails?.user?.accessToken;
  window.localStorage.setItem(localStorageKey, userToken);
  return allDetails;
}

function login({ email, password }) {
  return signInWithEmailAndPassword(auth, email, password).then(handleUserResponse);
}

function register({ full_name, email, password }) {
  return createUserWithEmailAndPassword(auth, email, password).then((userCredentials) => {
    createUser(userCredentials.user.uid, full_name, email);
    createBalances(userCredentials.user.uid);
  });
}

async function logout() {
  signOut(auth);
  window.localStorage.removeItem(localStorageKey);
}

export { getToken, login, register, logout, localStorageKey };
