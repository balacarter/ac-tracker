// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getDatabase, set, ref } from "firebase/database";

export interface IDailyPayload {
  completed: boolean;
}

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCYuqBXjH2v2fhjKd_tIfpDAtpcqH-LkSQ",

  authDomain: "ac-tracker-ab963.firebaseapp.com",

  databaseURL: "https://ac-tracker-ab963-default-rtdb.firebaseio.com",

  projectId: "ac-tracker-ab963",

  storageBucket: "ac-tracker-ab963.appspot.com",

  messagingSenderId: "136966603171",

  appId: "1:136966603171:web:e98f1b9e01bb9fdc1e5a16"

};

export const updateDaily = (completed: IDailyPayload) => {
  set(ref(database, 'daily/'), {
    completed: completed,
  });

}


// Initialize Firebase

const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);


