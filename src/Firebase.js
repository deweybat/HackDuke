import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const firebaseConfig = {
    apiKey: "AIzaSyDGXv6WjsFOhtcTqam0F7g7rPqAMpukZVE",
    authDomain: "hackduke-c1e73.firebaseapp.com",
    databaseURL: "https://hackduke-c1e73.firebaseio.com",
    projectId: "hackduke-c1e73",
    storageBucket: "hackduke-c1e73.appspot.com",
    messagingSenderId: "634044392884",
    appId: "1:634044392884:web:0259e016ecd0fbd5ac3ee1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings(settings);

export default firebase;