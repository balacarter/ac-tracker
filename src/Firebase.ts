// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getDatabase, set, ref, get, child, onValue, update } from 'firebase/database';

export interface IDailyCompletedPayload {
  completed: boolean;
}

export interface IDailyStreakCountPaylod {
  count: number;
}

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

export const updateDailyChallenge = (completed: IDailyCompletedPayload) => {
  set(ref(database, 'daily/completed'), {
    completed,
  });
};

export const getDailyStreakCount = () => {
  const dbRef = ref(getDatabase());
  return (get(child(dbRef, 'daily/count')).then((snapshot) => {
    return snapshot.val();
  }));
};

export const onDailyStreakCount = (callback: any) => {
  const dbRef = ref(database, 'daily/count');
  onValue(dbRef, (snapshot) => {
    const data = snapshot.val().count;
    callback(data);
  })
}

export const updateDailyStreakCount = (count: number) => {
  set(ref(database, 'daily/count'), {
    count,
  });
};

export const onDailyChallenge = (callback: any) => {
  const dbRef = ref(database, 'daily/challenges');
  onValue(dbRef, (snapshot) => {
    const data = snapshot.val();
    callback(data);
  })
}

export const addDailyChallenge = (num: number, challenge: string) => {
  const dbRef = ref(database, `daily/challenges/${num}`);
  set(dbRef, {
    id: num,
    challenge,
    completed: false,
  })
}

export interface IChallengeCompletedUpdate {
  completed: boolean;
}

export const updateChallengeCompleted = (newCompleted: boolean, id: number) => {
  update(ref(database, `daily/challenges/${id}/`), {
    completed: newCompleted,
  });
}

// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);