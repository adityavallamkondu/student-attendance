import firebase from 'firebase'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBcsEw2HOon3orBn9V1-wPcSVIPDMx0ab4",
    authDomain: "schoolattendance-39181.firebaseapp.com",
    databaseURL: "https://schoolattendance-39181-default-rtdb.firebaseio.com",
    projectId: "schoolattendance-39181",
    storageBucket: "schoolattendance-39181.appspot.com",
    messagingSenderId: "761411582925",
    appId: "1:761411582925:web:e98449391b4b885853e284"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default firebase.database();
 

  