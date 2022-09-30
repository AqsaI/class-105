
//ADD YOUR FIREBASE LINKS HERE
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom()
{
      room_name = document.getElementById("room_name").value

      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });

        localStorage.setItem("room_name", room_name);

        window.location ="kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
