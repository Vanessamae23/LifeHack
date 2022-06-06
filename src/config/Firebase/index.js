

import firebase from 'firebase'

//setting it up
firebase.initializeApp({
  databaseURL: "https://onesky-2d3ad-default-rtdb.asia-southeast1.firebasedatabase.app/",
  apiKey: "AIzaSyAwHkcobReGeMRf43ihVyZjQrn-s6G7f6g",
  authDomain: "onesky-2d3ad.firebaseapp.com",
  projectId: "onesky-2d3ad",
  storageBucket: "onesky-2d3ad.appspot.com",
  messagingSenderId: "1096544105580",
  appId: "1:1096544105580:web:dbfbfbac11f7c226f05449"
})

// making a variable that we can use
const Firebase = firebase
export default Firebase