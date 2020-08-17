import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAfUJyPEU8yvsiQ_JIUs30Q9xdBdaQweak",
  authDomain: "mcity-d137d.firebaseapp.com",
  databaseURL: "https://mcity-d137d.firebaseio.com",
  projectId: "mcity-d137d",
  storageBucket: "mcity-d137d.appspot.com",
  messagingSenderId: "537745669509",
  appId: "1:537745669509:web:b5551c658f8de56ad618ec",
  measurementId: "G-HJ5LC58HP9",
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions')

export {
  firebase, firebaseMatches, firebasePromotions
}
