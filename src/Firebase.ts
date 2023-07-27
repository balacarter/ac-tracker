// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import {
  getDatabase, set, ref, get, child, onValue, remove,
} from 'firebase/database';

export interface IDailyChallenge {
  id: number;
  challenge: string;
  completed: boolean;
}

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyCYuqBXjH2v2fhjKd_tIfpDAtpcqH-LkSQ',

  authDomain: 'ac-tracker-ab963.firebaseapp.com',

  databaseURL: 'https://ac-tracker-ab963-default-rtdb.firebaseio.com',

  projectId: 'ac-tracker-ab963',

  storageBucket: 'ac-tracker-ab963.appspot.com',

  messagingSenderId: '136966603171',

  appId: '1:136966603171:web:e98f1b9e01bb9fdc1e5a16',
};

export const dbUpdate = (dbPath: string, data: any) => {
  set(ref(database, dbPath), data);
};

export const dbAdd = (dbPath: string, data: any) => {
  set(ref(database, dbPath), data);
};

export const dbSubscribe = (dbPath: string, callback: any) => {
  const dbRef = ref(database, dbPath);
  onValue(dbRef, (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
};

export const dbGet = (dbPath: string) => {
  const dbRef = ref(getDatabase());
  return (get(child(dbRef, dbPath)).then((snapshot) => snapshot.val()));
};

export const dbRemove = (dbPath: string) => {
  remove(ref(database, dbPath));
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
