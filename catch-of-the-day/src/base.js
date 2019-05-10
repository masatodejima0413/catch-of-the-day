import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAaidEDK2AoKO9V7rZncqHuTOzjxvY1igA",
    authDomain: "catch-of-the-day-d8d7f.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-d8d7f.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;