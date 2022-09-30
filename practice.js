
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAaoIJi6aEaQogQ41rbVNI-B0iu6bUMPTw",
    authDomain: "kwitter-acd42.firebaseapp.com",
    databaseURL: "https://kwitter-acd42-default-rtdb.firebaseio.com",
    projectId: "kwitter-acd42",
    storageBucket: "kwitter-acd42.appspot.com",
    messagingSenderId: "512349585802",
    appId: "1:512349585802:web:41747dd6e286a731314873"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
      });
  }
